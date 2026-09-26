import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, 'dist');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ['index.html', 'styles.css', 'main.js', 'favicon.svg']) {
  await cp(path.join(root, file), path.join(output, file));
}

await cp(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
console.log('Site preparado em dist/ para publicação.');
