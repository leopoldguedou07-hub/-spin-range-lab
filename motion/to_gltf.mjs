// Convertit models/*.glb en .gltf (json + textures .jpg) pour l'hébergement Artifact.
import { NodeIO } from '@gltf-transform/core';
import { writeFile, mkdir } from 'node:fs/promises';
const io = new NodeIO();
await mkdir('models', { recursive: true });
for (const n of ['mammouth', 'serpent', 'predateur']) {
  const doc = await io.read(`models/${n}.glb`);
  doc.getRoot().listTextures().forEach((t, i) => t.setURI(`${n}_${i}.jpg`));
  const { json, resources } = await io.writeJSON(doc, { format: 'gltf', basename: n });
  for (const [uri, data] of Object.entries(resources)) {
    if (uri.endsWith('.bin')) {
      const b = json.buffers.find(b => b.uri === uri);
      b.uri = 'data:application/octet-stream;base64,' + Buffer.from(data).toString('base64');
    } else await writeFile(`models/${uri}`, data);
  }
  await writeFile(`models/${n}.json`, JSON.stringify(json));
}
