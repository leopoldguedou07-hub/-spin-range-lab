// Prépare les modèles pour la page : géométrie en GLB (textures .jpg à côté),
// emballée en base64 dans un module JS (aucun fetch de data:/blob: côté page).
import { readFile, writeFile } from 'node:fs/promises';
for (const n of ['mammouth', 'serpent', 'predateur']) {
  const json = JSON.parse(await readFile(`models/${n}.json`, 'utf8'));
  const bin = Buffer.from(json.buffers[0].uri.split(',')[1], 'base64');
  delete json.buffers[0].uri;
  let js = Buffer.from(JSON.stringify(json));
  js = Buffer.concat([js, Buffer.alloc((4 - js.length % 4) % 4, 0x20)]);
  const bp = Buffer.concat([bin, Buffer.alloc((4 - bin.length % 4) % 4)]);
  const h = Buffer.alloc(12); h.writeUInt32LE(0x46546C67, 0); h.writeUInt32LE(2, 4); h.writeUInt32LE(12 + 8 + js.length + 8 + bp.length, 8);
  const c1 = Buffer.alloc(8); c1.writeUInt32LE(js.length, 0); c1.writeUInt32LE(0x4E4F534A, 4);
  const c2 = Buffer.alloc(8); c2.writeUInt32LE(bp.length, 0); c2.writeUInt32LE(0x004E4942, 4);
  const glb = Buffer.concat([h, c1, js, c2, bp]);
  await writeFile(`models/${n}.geo.js`, `export default "${glb.toString('base64')}";\n`);
}
