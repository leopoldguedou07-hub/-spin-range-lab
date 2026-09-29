#!/bin/bash
# Installe l'environnement de build (Linux, CPU seul, pas de GPU nécessaire).
# Blender 5.2.2 est utilisé comme module Python (bpy) dans un venv Python 3.13.
set -e
command -v uv >/dev/null || pip install uv
uv venv -q -p python3.13 /opt/b52
VIRTUAL_ENV=/opt/b52 uv pip install -q "bpy==5.2.2" scikit-image scipy numpy pillow
echo "OK. Exemple : cd blender && /opt/b52/bin/python build.py triceratops"
