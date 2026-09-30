import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const js = fs.readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8');

assert.match(html, /<title>PaidX<\/title>/);
assert.match(js, /const profiles = \[/);
assert.match(js, /profile-carousel/);
assert.match(js, /data-profile/);
assert.match(js, /\/profiles\/cz_binance\.jpg/);
assert.match(js, /duplicatedProfileCards/);
assert.match(js, /\/brand\/paidx-logo\.svg/);
assert.match(js, /\/brands\/flap\.svg/);
assert.match(js, /\/brands\/fourmeme\.svg/);
assert.doesNotMatch(js, /venue-mark flap">F</);
assert.doesNotMatch(js, /venue-mark four">4</);
assert.match(css, /@keyframes profileMarquee/);
assert.match(js, /0x38/); // BNB Chain mainnet
assert.match(js, /window\.ethereum/);
assert.match(js, /Launch adapter not configured/);
assert.match(js, /https:\/\/flap\.sh\/launch/);
assert.match(js, /https:\/\/four\.meme/);
assert.match(js, /PaidX never asks for your X login/);
assert.match(js, /<a class="x-social" href="https:\/\/x\.com\/PaidXBNB" target="_blank" rel="noopener noreferrer" aria-label="Follow PaidX on X">/);
assert.match(css, /\.x-social/);
assert.match(css, /\.x-social:focus-visible/);
assert.match(css, /\.x-social-label/);
assert.doesNotMatch(js, /Sign in with X/i);
assert.doesNotMatch(js, /privateKey|PRIVATE_KEY|successfully launched/i);
assert.match(css, /--bnb: #f0b90b/);
assert.match(css, /\.sidebar/);
assert.match(css, /@media \(max-width: 760px\)/);
assert.match(css, /prefers-reduced-motion/);
console.log('site assertions passed');
