import fs from 'node:fs/promises';
import path from 'node:path';

const profiles = ['cz_binance', 'BNBCHAIN', 'binance', 'heyibinance', 'Aster_DEX', 'opbnbchain'];
const outDir = path.resolve('public/profiles');
await fs.mkdir(outDir, { recursive: true });
const manifest = [];

for (const handle of profiles) {
  const pageUrl = `https://x.com/${handle}`;
  const response = await fetch(pageUrl, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!response.ok) throw new Error(`${handle}: X page HTTP ${response.status}`);
  const html = await response.text();
  const matches = [...html.matchAll(/https:\/\/pbs\.twimg\.com\/profile_images\/[^"'\\]+/g)].map((m) => m[0].replaceAll('&amp;', '&'));
  const avatarUrl = matches.find((url) => /_400x400\.(?:jpg|png|webp)$/i.test(url));
  if (!avatarUrl) throw new Error(`${handle}: no public X profile image found`);
  const imageResponse = await fetch(avatarUrl, { headers: { referer: pageUrl, 'user-agent': 'Mozilla/5.0' } });
  if (!imageResponse.ok) throw new Error(`${handle}: avatar HTTP ${imageResponse.status}`);
  const contentType = imageResponse.headers.get('content-type') || '';
  const ext = contentType.includes('png') ? 'png' : contentType.includes('webp') ? 'webp' : 'jpg';
  const bytes = Buffer.from(await imageResponse.arrayBuffer());
  const file = `${handle.toLowerCase()}.${ext}`;
  await fs.writeFile(path.join(outDir, file), bytes);
  manifest.push({ handle, xProfile: pageUrl, source: avatarUrl, file: `/profiles/${file}`, contentType, bytes: bytes.length });
  console.log(`${handle}: ${file} (${bytes.length} bytes)`);
}

await fs.writeFile(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
