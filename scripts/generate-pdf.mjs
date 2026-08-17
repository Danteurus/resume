import { exec, execFile } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { chromium } from 'playwright';
import { preview } from 'vite';

const execute = promisify(execFile);
const executeShell = promisify(exec);
const host = '127.0.0.1';
const port = 4174;
const outputDirectory = new URL('../output/', import.meta.url);
const resumes = {
  en: 'cristian-serrano-resume-en.pdf',
  es: 'cristian-serrano-resume-es.pdf',
};

await executeShell('npm run build');
await mkdir(outputDirectory, { recursive: true });

const server = await preview({ preview: { host, port, strictPort: true } });
const browser = await chromium.launch();

try {
  const page = await browser.newPage();

  for (const [locale, filename] of Object.entries(resumes)) {
    await page.goto(`http://${host}:${port}/?lang=${locale}`, { waitUntil: 'networkidle' });
    await page.pdf({
      path: fileURLToPath(new URL(filename, outputDirectory)),
      preferCSSPageSize: true,
      printBackground: true,
    });
    console.log(`Generated output/${filename}`);
  }
} finally {
  await browser.close();
  await server.close();
}

const validation = await execute(process.execPath, ['scripts/validate-pdf.mjs']);
process.stdout.write(validation.stdout);
