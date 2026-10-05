// Rend la bande-annonce image par image puis l'encode en MP4.
//   node render.mjs                       -> video complète (motion/out/)
//   node render.mjs --stills 3,10.5,14    -> quelques images PNG de contrôle
//   options : --w 1920 --fps 30 --from 0 --to 53
// Prérequis : npm i playwright-core three@0.169.0 ; ffmpeg ; un Chromium.
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const args = Object.fromEntries(process.argv.slice(2).reduce((a, x, i, all) => (x.startsWith('--') ? [...a, [x.slice(2), all[i + 1] && !all[i + 1].startsWith('--') ? all[i + 1] : true]] : a), []));
const W = +(args.w || 1920), FPS = +(args.fps || 30);
const threeDir = join(here, 'node_modules', 'three');
const chrome = process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const types = { '.html': 'text/html', '.js': 'text/javascript', '.glb': 'model/gltf-binary', '.woff2': 'font/woff2', '.mp3': 'audio/mpeg', '.json': 'application/json', '.jpg': 'image/jpeg' };
const server = createServer(async (req, res) => {
  const p = join(here, decodeURIComponent(req.url.split('?')[0]));
  let body;
  try { body = await readFile(p); } catch { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' }); res.end(body);
}).listen(0);
const port = server.address().port;

const browser = await chromium.launch({ executablePath: chrome, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--disable-gpu-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('console', m => console.log('[page]', m.text()));
page.on('pageerror', e => console.log('[page error]', e.message));
await page.route('https://cdn.jsdelivr.net/npm/three@0.169.0/**', async r => {
  const rel = new URL(r.request().url()).pathname.replace('/npm/three@0.169.0/', '');
  r.fulfill({ body: await readFile(join(threeDir, rel)), contentType: 'text/javascript' });
});
await page.goto(`http://localhost:${port}/index.html?capture=1`);
await page.waitForFunction(() => window.filmReady, null, { timeout: 180000 });
await page.evaluate(w => window.film.setSize(w, Math.round(w * 9 / 16)), W);

const grab = async t => Buffer.from((await page.evaluate(t => window.film.capture(t, .95), t)).split(',')[1], 'base64');
await mkdir(join(here, 'out'), { recursive: true });

if (args.stills) {
  for (const t of String(args.stills).split(',').map(Number)) {
    const t0 = Date.now();
    await writeFile(join(here, 'out', `still_${t.toFixed(2)}.jpg`), await grab(t));
    console.log(`t=${t} ${Date.now() - t0} ms`);
  }
} else {
  const from = +(args.from || 0), to = +(args.to || 53);
  const n = Math.round((to - from) * FPS);
  const name = args.out || 'video_seule.mp4';
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', join(here, 'out', name)], { stdio: ['pipe', 'inherit', 'inherit'] });
  const t0 = Date.now();
  for (let i = 0; i < n; i++) {
    const buf = await grab(from + i / FPS);
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % 30 === 0) {
      const el = (Date.now() - t0) / 1000;
      console.log(`image ${i}/${n}  ${(el / (i + 1)).toFixed(2)} s/img  reste ~${Math.round(el / (i + 1) * (n - i) / 60)} min`);
    }
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  console.log('ok', name);
}
await browser.close();
server.close();
