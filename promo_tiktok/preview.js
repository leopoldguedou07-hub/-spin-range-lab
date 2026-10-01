const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  p.on('console', m => console.log('LOG', m.text())); p.on('pageerror', e => console.log('ERR', e.message));
  await p.goto('http://localhost:8765/promo.html'); await p.evaluate(() => window.ready);
  const ts = process.argv.slice(2).map(Number);
  for (const t of ts) { await p.evaluate(t => window.show(t), t); await p.locator('canvas').screenshot({ path: `prev_${t}.jpg`, type: 'jpeg', quality: 70 }); }
  await b.close();
})();
