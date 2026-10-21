import { preview } from 'astro';
import { chromium } from 'playwright';

const server = await preview({ logLevel: 'warn' });
const browser = await chromium.launch();

try {
  const page = await browser.newPage();
  await page.emulateMedia({ media: 'print', colorScheme: 'light' });
  await page.goto(`http://localhost:${server.port}/cv/`, { waitUntil: 'networkidle' });
  await page.pdf({ path: 'public/cv.pdf', preferCSSPageSize: true, printBackground: true });
  console.log('Wrote public/cv.pdf');
} finally {
  await browser.close();
  await server.stop();
}
