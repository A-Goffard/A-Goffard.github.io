const fs = require("fs-extra");
const path = require("path");

const distPath = path.join(__dirname, "dist");
const docsPath = path.join(__dirname, "docs");

// Borrar docs si ya existe
fs.remove(docsPath)
  .then(() => {
    console.log("✅ Carpeta 'docs' eliminada.");
    return fs.copy(distPath, docsPath);
  })
  .then(() => {
    console.log("📂 Copiando archivos de 'dist' a 'docs'...");
    return fs.writeFile(path.join(docsPath, ".nojekyll"), "");
  })
  .then(() => {
    console.log("✅ Archivo '.nojekyll' creado.");
    console.log("🚀 ¡Listo! Tu proyecto está en 'docs/' y listo para GitHub Pages.");
  })
  .catch((err) => console.error("❌ Error:", err));
