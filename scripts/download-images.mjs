import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const manifest = JSON.parse(await fs.readFile(path.join(root, "scripts", "image-manifest.json"), "utf8"));

for (const item of manifest) {
  const destination = path.join(root, item.path);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  console.log(`Downloading: ${item.alt}`);
  const response = await fetch(item.source);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${item.source}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(destination, buffer);
  console.log(`  -> ${item.path}`);
}

console.log(`\nDone. Downloaded ${manifest.length} images.`);
