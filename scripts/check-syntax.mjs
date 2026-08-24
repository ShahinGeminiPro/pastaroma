import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const dir = 'src/js';

async function checkDir(d) {
  const files = fs.readdirSync(d);
  for (const f of files) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) {
      await checkDir(p);
    } else if (p.endsWith('.js')) {
      try {
        await import(pathToFileURL(p).href);
      } catch (e) {
        if (e instanceof SyntaxError) {
          console.error('SyntaxError in', p);
          console.error(e);
        }
      }
    }
  }
}

checkDir(dir).catch(console.error);
