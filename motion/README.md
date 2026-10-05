# Bande-annonce « Le Dinosaure — Édition Mythique »

Motion design 3D (three.js) avec les squelettes Meshy du Mammouth, du Titanoboa et du Mosasaure.
Durée 65 s : intro, titre, 12 s d'images du jeu (`plates.webm`, tirées de la capture Desert Ancien), une séquence de fouille par espèce, finale.
Vidéo finale : `LeDinosaure_Mythique.mp4`.

| Fichier | Rôle |
|---|---|
| `index.html` | Lecteur temps réel (bouton « Lancer », son, pause, rejouer). |
| `film.bundle.js` | `film.js` + three.js regroupés (`npx esbuild film.js --bundle --format=esm --minify --outfile=film.bundle.js`), chargé par la page. |
| `film.js` | Toute la scène : sol procédural (terre fissurée, dunes, fond marin, plateforme), squelettes qui brillent, particules, débris, pilier de lumière, scan, hologramme, post-traitement, textes. Tout dépend uniquement du temps `t`. |
| `audio.py` | Bande-son synthétisée et calée sur la timeline → `audio/bande_son.mp3`. |
| `render.mjs` | Rend la vidéo image par image (Chromium sans écran) puis l'encode en MP4. |
| `to_gltf.mjs`, `to_web.mjs` | `models/*.glb` → `.json` + `.jpg`, puis → `models/*.geo.js` (géométrie en base64, chargée par la page). |
| `models/` | Modèles allégés (textures 1024 px) : `.glb` à importer dans Roblox Studio, `.json`/`.jpg` pour la page. |

## Refaire la vidéo

```bash
cd motion
npm i three@0.169.0 playwright-core @gltf-transform/core   # une fois
pip install numpy && python3 audio.py
node render.mjs --to 65                # -> out/video_seule.mp4 (~1 h 15 en CPU)
node render.mjs --stills 10.5,25,38    # images de contrôle
ffmpeg -i out/video_seule.mp4 -i audio/bande_son.wav -c:v libx264 -crf 22 -maxrate 7M -bufsize 14M -pix_fmt yuv420p -c:a aac -b:a 192k -shortest LeDinosaure_Mythique.mp4
```

Les moments clés (secondes) sont dans `TL`/`CLIPS` en haut de `film.js` et dans `audio.py`. Si tu changes l'un, change l'autre.
