import { readFile } from 'node:fs/promises';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const outputDirectory = new URL('../output/', import.meta.url);
const filenames = ['cristian-serrano-resume-en.pdf', 'cristian-serrano-resume-es.pdf'];

for (const filename of filenames) {
  const data = new Uint8Array(await readFile(new URL(filename, outputDirectory)));
  const pdf = await getDocument({ data }).promise;

  if (pdf.numPages !== 1) {
    throw new Error(`${filename} has ${pdf.numPages} pages; expected 1`);
  }

  const page = await pdf.getPage(1);
  const content = await page.getTextContent();
  const text = content.items.map((item) => ('str' in item ? item.str : '')).join(' ');

  if (!text.trim()) {
    throw new Error(`${filename} contains no extractable text`);
  }

  console.log(`Validated output/${filename}: 1 page, ${text.length} text characters`);
}
