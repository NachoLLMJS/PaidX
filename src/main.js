import './styles.css';

const BNB_CHAIN = {
  chainId: '0x38',
  chainName: 'BNB Smart Chain',
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  rpcUrls: ['https://bsc-dataseed.bnbchain.org'],
  blockExplorerUrls: ['https://bscscan.com']
};

const state = {
  wallet: null,
  handle: '',
  tokenName: '',
  symbol: '',
  venue: 'flap'
};

const profiles = [
  { handle: 'cz_binance', name: 'CZ', symbol: 'CZBINANCE', avatar: '/profiles/cz_binance.jpg' },
  { handle: 'BNBCHAIN', name: 'BNB Chain', symbol: 'BNBCHAIN', avatar: '/profiles/bnbchain.jpg' },
  { handle: 'binance', name: 'Binance', symbol: 'BINANCE', avatar: '/profiles/binance.jpg' },
  { handle: 'heyibinance', name: 'Yi He', symbol: 'HEYIBINANCE', avatar: '/profiles/heyibinance.jpg' },
  { handle: 'Aster_DEX', name: 'Aster', symbol: 'ASTERDEX', avatar: '/profiles/aster_dex.jpg' },
  { handle: 'opbnbchain', name: 'opBNB', symbol: 'OPBNBCHAIN', avatar: '/profiles/opbnbchain.jpg' }
];

const renderProfileCards = (duplicate = false) => profiles.map((profile) => `
  <button class="profile-chip" type="button" data-profile="${profile.handle}"${duplicate ? ' tabindex="-1" aria-hidden="true"' : ''}>
    <span class="profile-chip-avatar"><img src="${profile.avatar}" alt="${profile.handle}" width="44" height="44" loading="eager" decoding="async"></span>
    <span class="profile-chip-copy"><strong>${profile.name}</strong><small>@${profile.handle} · $${profile.symbol}</small></span>
    <span class="profile-chip-action">Launch ↗</span>
  </button>
`).join('');

const profileCards = renderProfileCards();
const duplicatedProfileCards = renderProfileCards(true);

const icons = {
  home: '<svg viewBox="0 0 24 24"><path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  launch: '<svg viewBox="0 0 24 24"><path d="M14 5c3-2 5-2 5-2s0 2-2 5l-5 5-4-4zM8 9l-4 2 3 3M12 13l-2 5 3-2M8 16l-3 3"/></svg>',
  claim: '<svg viewBox="0 0 24 24"><path d="M4 12h4l3 3 3-6 3 3h3M5 7h14v12H5z"/></svg>',
  docs: '<svg viewBox="0 0 24 24"><path d="M4 5a3 3 0 0 1 3-2h5v17H7a3 3 0 0 0-3 2zM20 5a3 3 0 0 0-3-2h-5v17h5a3 3 0 0 1 3 2z"/></svg>',
  wallet: '<svg viewBox="0 0 24 24"><path d="M4 7h15a2 2 0 0 1 2 2v10H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11v4M16 13h2"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M14 6l6 6-6 6"/></svg>',
  down: '<svg viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>',
  external: '<svg viewBox="0 0 24 24"><path d="M14 5h5v5M19 5l-9 9M18 13v6H5V6h6"/></svg>'
};

const app = document.querySelector('#app');
app.innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <aside class="sidebar" aria-label="Primary">
    <a class="side-logo" href="#home" aria-label="PaidX home"><img src="/brand/paidx-logo.svg" alt="PaidX"></a>
    <nav>
      <a class="active" href="#home" aria-label="Home">${icons.home}</a>
      <a href="#explore" aria-label="Explore">${icons.search}</a>
      <a href="#launch" aria-label="Launch">${icons.launch}</a>
      <a href="#claim" aria-label="Claim">${icons.claim}</a>
      <a href="#how" aria-label="How it works">${icons.docs}</a>
    </nav>
    <div class="bnb-orb" aria-label="BNB Chain"><span>BNB</span></div>
  </aside>

  <header class="topbar">
    <label class="search-field" for="globalSearch">${icons.search}<input id="globalSearch" placeholder="Search @handle or launch a profile" autocomplete="off"><kbd>/</kbd></label>
    <div class="top-actions"><span class="network-status"><i></i> BNB Chain</span><a class="x-social" href="https://x.com/PaidXBNB" target="_blank" rel="noopener noreferrer" aria-label="Follow PaidX on X"><span class="x-social-mark" aria-hidden="true">𝕏</span><span class="x-social-label">@PaidXBNB</span></a><a class="pill-button light" href="#launch">Launch</a></div>
  </header>

  <main id="main">
    <section class="hero" id="home">
      <div class="hero-glow"></div>
      <span class="status-pill"><i></i> PROFILE LAUNCHPAD ON BNB</span>
      <h1>Every X profile<br>is a <span>token</span></h1>
      <p>Pick any X profile and launch it as a token on PaidX. Creator fees go to the person behind the profile</p>
      <div class="hero-actions"><a class="pill-button yellow" href="#launch">Launch a profile</a><a class="pill-button outline" href="#how">How it works ${icons.down}</a></div>
      <small>Anyone can launch a public profile. Wallet approval is only requested when you choose to connect</small>
    </section>

    <section class="protocol-strip" aria-label="Protocol facts">
      <div><span>NETWORK</span><strong>BNB Chain</strong><small>Mainnet · 56</small></div>
      <div><span>LAUNCH VENUES</span><strong>2</strong><small>Flap + Four.Meme</small></div>
      <div><span>CREATOR FEES</span><strong>Owner-first</strong><small>Claim routing required</small></div>
      <div><span>EXECUTION</span><strong>Fail-closed</strong><small>No adapter, no transaction</small></div>
    </section>

    <section class="profile-carousel" aria-label="Profiles to launch">
      <div class="profile-marquee"><div class="profile-track">${profileCards}${duplicatedProfileCards}</div></div>
    </section>

    <section class="intent-rail" aria-label="Launch flow">
      <div class="intent-chip"><span class="chip-icon">@</span><div><strong>Choose profile</strong><small>Any public X handle</small></div><b>01</b></div>
      <div class="intent-chip"><span class="chip-icon">F</span><div><strong>Select venue</strong><small>Flap or Four.Meme</small></div><b>02</b></div>
      <div class="intent-chip"><span class="chip-icon">◆</span><div><strong>Launch on BNB</strong><small>From your wallet</small></div><b>03</b></div>
      <div class="intent-chip"><span class="chip-icon">↗</span><div><strong>Route fees</strong><small>To verified owner</small></div><b>04</b></div>
    </section>

    <section class="section-block" id="how">
      <div class="section-title"><div><h2>How it works</h2><p>From a profile to a launch intent in about a minute</p></div></div>
      <div class="how-panel">
        <ol class="steps">
          <li><span>1</span><div><h3>Pick a profile</h3><p>Enter any public X handle. The profile becomes the source identity for the token</p></div></li>
          <li><span>2</span><div><h3>Launch it from your wallet</h3><p>Choose Flap or Four.Meme, connect on BNB Chain and review the final transaction</p></div></li>
          <li><span>3</span><div><h3>The profile owner earns</h3><p>Creator fees are reserved for the verified person behind the profile, not the launcher</p></div></li>
          <div class="step-actions"><a class="pill-button yellow" href="#launch">Launch a profile</a><a class="pill-button outline" href="#claim">Fee routing</a></div>
        </ol>
        <div class="mini-flow" aria-label="Token launch flow preview">
          <div class="mini-input"><small>PROFILE TO LAUNCH</small><strong>@profile</strong></div>
          <div class="flow-arrow">↓</div>
          <article class="token-preview compact"><div class="preview-art"><span>P</span><em>BNB</em></div><div class="preview-meta"><small>PROFILE TOKEN</small><h3>$PROFILE</h3><p>Creator fees → owner</p></div><div class="preview-status">READY TO CONFIGURE</div></article>
        </div>
      </div>
    </section>

    <section class="section-block launch-section" id="launch">
      <div class="section-title"><div><h2>Launch a profile</h2><p>Create the token intent. PaidX never asks for your X login</p></div><span class="section-badge">BNB MAINNET</span></div>
      <div class="launch-grid">
        <form class="launch-form" id="launchForm">
          <div class="form-head"><span>01</span><div><strong>PROFILE & TOKEN</strong><small>PUBLIC SOURCE</small></div></div>
          <label>X profile handle<div class="input-box"><span>@</span><input id="profileHandle" maxlength="15" placeholder="username" autocomplete="off"></div></label>
          <div class="form-row"><label>Token name<input id="tokenName" maxlength="32" placeholder="Profile name"></label><label>Symbol<input id="tokenSymbol" maxlength="10" placeholder="PROFILE"></label></div>
          <fieldset><legend>Launch venue</legend><div class="venue-grid"><button type="button" class="venue selected" data-venue="flap"><span class="venue-mark flap"><img src="/brands/flap.svg" alt="Flap"></span><div><strong>Flap</strong><small>Tax token launch</small></div><i>${icons.check}</i></button><button type="button" class="venue" data-venue="four"><span class="venue-mark four"><img src="/brands/fourmeme.svg" alt="Four.Meme"></span><div><strong>Four.Meme</strong><small>Fair launch</small></div><i>${icons.check}</i></button></div></fieldset>
          <div class="form-note"><span>!</span><p>Profile ownership and fee routing must be verified before creator payouts can be claimed</p></div>
          <button type="submit" class="launch-submit"><span>Review launch intent</span>${icons.arrow}</button>
        </form>

        <div class="preview-column">
          <div class="preview-label"><span>LIVE PREVIEW</span><span>NOT YET ON-CHAIN</span></div>
          <article class="token-preview" id="tokenPreview">
            <div class="preview-art"><span id="previewInitial">P</span><em>BNB</em><b id="previewHandle">@profile</b></div>
            <div class="preview-meta"><small id="previewVenue">LAUNCH VIA FLAP</small><h3 id="previewName">Profile token</h3><div class="ticker-row"><strong>$<span id="previewSymbol">PROFILE</span></strong><span>BNB Chain</span></div></div>
            <div class="fee-route"><span>CREATOR FEES</span><b>→</b><strong>VERIFIED PROFILE OWNER</strong></div>
          </article>
          <button class="wallet-action" id="walletButton" type="button">${icons.wallet}<span>Connect wallet</span></button>
        </div>
      </div>
    </section>

    <section class="section-block" id="explore">
      <div class="section-title"><div><h2>Profile launches</h2><p>Live market data will appear here after the indexer is connected</p></div><span class="text-link">BNB Chain only</span></div>
      <div class="empty-market">
        <div class="empty-grid" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
        <div class="empty-copy"><span class="empty-icon">◇</span><h3>No indexed launches yet</h3><p>PaidX does not fabricate token prices, holders, volume or creator earnings. Verified launches will populate this surface</p><a href="#launch" class="pill-button yellow">Create first intent</a></div>
      </div>
    </section>

    <section class="data-columns" id="claim">
      <div><div class="section-title compact"><div><h2>Launch intents</h2><p>Transactions prepared in this browser</p></div></div><div class="data-panel"><div class="table-head"><span>PROFILE</span><span>VENUE</span><span>STATUS</span></div><div class="empty-row"><span>—</span><p>No launch transaction has been prepared</p></div></div></div>
      <div><div class="section-title compact"><div><h2>Fee routing</h2><p>Creator payouts to verified profile owners</p></div></div><div class="data-panel"><div class="routing-row"><span class="route-number">1</span><div><strong>Profile ownership</strong><small>Verification adapter</small></div><b>—</b></div><div class="routing-row"><span class="route-number">2</span><div><strong>Claimable creator fees</strong><small>On-chain vault balance</small></div><b>—</b></div><div class="routing-row"><span class="route-number">3</span><div><strong>Payout wallet</strong><small>Verified owner address</small></div><b>—</b></div></div></div>
    </section>

    <section class="bottom-cta"><span class="bnb-diamond">◆</span><h2>Turn a profile into<br>a BNB market</h2><p>Choose the identity. Pick the venue. Keep creator fees pointed at the person behind it</p><a href="#launch" class="pill-button yellow">Launch a profile</a></section>
  </main>

  <footer>
    <div class="footer-brand"><a href="#home"><img class="foot-mark" src="/brand/paidx-logo.svg" alt=""><strong>PAIDX</strong></a><p>Every X profile is a token. Creator fees go to the person behind the profile</p></div>
    <div><span>PRODUCT</span><a href="#explore">Explore</a><a href="#launch">Launch</a><a href="#claim">Claim</a></div>
    <div><span>PROTOCOL</span><a href="#how">How it works</a><a href="https://flap.sh/launch?chain=bnb&lang=en" target="_blank" rel="noopener noreferrer">Flap ↗</a><a href="https://four.meme/en/create-token" target="_blank" rel="noopener noreferrer">Four.Meme ↗</a></div>
    <small>Tokens are speculative and can go to zero. Nothing here is investment advice</small>
  </footer>

  <nav class="mobile-nav" aria-label="Mobile navigation"><a href="#home">${icons.home}<span>Home</span></a><a href="#explore">${icons.search}<span>Explore</span></a><a class="mobile-launch" href="#launch">${icons.launch}<span>Launch</span></a><a href="#claim">${icons.claim}<span>Claim</span></a></nav>

  <dialog id="reviewDialog">
    <div class="dialog-head"><div><span>LAUNCH INTENT</span><strong id="dialogToken">$PROFILE</strong></div><button id="closeDialog" aria-label="Close">×</button></div>
    <div class="dialog-profile"><span id="dialogInitial">P</span><div><h3 id="dialogName">Profile token</h3><p id="dialogHandle">@profile</p></div></div>
    <dl><div><dt>Network</dt><dd>BNB Chain</dd></div><div><dt>Venue</dt><dd id="dialogVenue">Flap</dd></div><div><dt>Creator fees</dt><dd>Verified profile owner</dd></div><div><dt>Adapter status</dt><dd class="pending">Not configured</dd></div></dl>
    <div class="dialog-warning"><b>!</b><p>No launch transaction can be sent until the selected venue adapter and fee-routing contract are configured</p></div>
    <button class="dialog-wallet" id="dialogWallet">${icons.wallet}<span>Connect wallet</span></button>
    <button class="official-venue" id="officialVenue">Continue on official venue ${icons.external}</button>
  </dialog>

  <div class="toast" id="toast" role="status" aria-live="polite"></div>
`;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function cleanHandle(value) {
  return value.trim().replace(/^https?:\/\/(www\.)?(x|twitter)\.com\//i, '').replace(/^@/, '').split(/[/?#]/)[0].replace(/[^a-zA-Z0-9_]/g, '').slice(0, 15);
}

function symbolFrom(handle) {
  return handle.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 10) || 'PROFILE';
}

function showToast(message, tone = 'default') {
  const el = $('#toast');
  el.textContent = message;
  el.dataset.tone = tone;
  el.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => el.classList.remove('show'), 3500);
}

function updatePreview() {
  const handle = cleanHandle($('#profileHandle').value) || 'profile';
  const name = $('#tokenName').value.trim() || `${handle} token`;
  const symbol = ($('#tokenSymbol').value.trim().replace(/[^a-zA-Z0-9]/g, '').toUpperCase() || symbolFrom(handle)).slice(0, 10);
  state.handle = handle;
  state.tokenName = name;
  state.symbol = symbol;
  $('#previewInitial').textContent = handle[0].toUpperCase();
  $('#previewHandle').textContent = `@${handle}`;
  $('#previewName').textContent = name;
  $('#previewSymbol').textContent = symbol;
  $('#previewVenue').textContent = `LAUNCH VIA ${state.venue === 'flap' ? 'FLAP' : 'FOUR.MEME'}`;
}

function fillFromHandle() {
  const handle = cleanHandle($('#profileHandle').value);
  if (!handle) return;
  if (!$('#tokenName').value.trim()) $('#tokenName').value = handle.replace(/_/g, ' ');
  if (!$('#tokenSymbol').value.trim()) $('#tokenSymbol').value = symbolFrom(handle);
  updatePreview();
}

async function ensureBnbChain() {
  const current = await window.ethereum.request({ method: 'eth_chainId' });
  if (current.toLowerCase() === BNB_CHAIN.chainId) return;
  try {
    await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: BNB_CHAIN.chainId }] });
  } catch (error) {
    if (error.code !== 4902) throw error;
    await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [BNB_CHAIN] });
  }
}

async function connectWallet() {
  if (!window.ethereum) {
    showToast('No injected wallet found. Install a BNB-compatible wallet', 'error');
    return false;
  }
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    if (!accounts?.[0]) throw new Error('No account authorized');
    await ensureBnbChain();
    state.wallet = accounts[0];
    const short = `${state.wallet.slice(0, 6)}…${state.wallet.slice(-4)}`;
    $('#walletButton span').textContent = short;
    $('#dialogWallet span').textContent = 'Launch adapter not configured';
    $('#walletButton').classList.add('connected');
    showToast('Wallet connected on BNB Chain', 'success');
    return true;
  } catch (error) {
    showToast(error?.message || 'Wallet connection was not completed', 'error');
    return false;
  }
}

function openReview(event) {
  event.preventDefault();
  fillFromHandle();
  if (!state.handle || state.handle === 'profile') {
    showToast('Enter a valid public X handle', 'error');
    $('#profileHandle').focus();
    return;
  }
  if (!$('#tokenName').value.trim() || !$('#tokenSymbol').value.trim()) {
    showToast('Token name and symbol are required', 'error');
    return;
  }
  $('#dialogToken').textContent = `$${state.symbol}`;
  $('#dialogInitial').textContent = state.handle[0].toUpperCase();
  $('#dialogName').textContent = state.tokenName;
  $('#dialogHandle').textContent = `@${state.handle}`;
  $('#dialogVenue').textContent = state.venue === 'flap' ? 'Flap' : 'Four.Meme';
  $('#reviewDialog').showModal();
}

$('#profileHandle').addEventListener('blur', fillFromHandle);
$('#profileHandle').addEventListener('input', updatePreview);
$('#tokenName').addEventListener('input', updatePreview);
$('#tokenSymbol').addEventListener('input', updatePreview);
$('#launchForm').addEventListener('submit', openReview);
$('#closeDialog').addEventListener('click', () => $('#reviewDialog').close());
$('#reviewDialog').addEventListener('click', (event) => { if (event.target === $('#reviewDialog')) $('#reviewDialog').close(); });
$('#walletButton').addEventListener('click', connectWallet);
$('#dialogWallet').addEventListener('click', async () => {
  if (!state.wallet) await connectWallet();
  else showToast('Launch adapter not configured. No transaction was sent', 'error');
});

$$('.venue').forEach((button) => button.addEventListener('click', () => {
  state.venue = button.dataset.venue;
  $$('.venue').forEach((item) => item.classList.toggle('selected', item === button));
  updatePreview();
}));

$('#officialVenue').addEventListener('click', () => {
  const url = state.venue === 'flap' ? 'https://flap.sh/launch?chain=bnb&lang=en' : 'https://four.meme/en/create-token';
  window.open(url, '_blank', 'noopener,noreferrer');
});

$$('.profile-chip').forEach((button) => button.addEventListener('click', () => {
  const profile = profiles.find((item) => item.handle === button.dataset.profile);
  if (!profile) return;
  $('#profileHandle').value = profile.handle;
  $('#tokenName').value = profile.name;
  $('#tokenSymbol').value = profile.symbol;
  updatePreview();
  $('#launch').scrollIntoView({ behavior: 'smooth' });
}));

$('#globalSearch').addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  const handle = cleanHandle(event.currentTarget.value);
  if (!handle) {
    showToast('Enter an X handle to begin', 'error');
    return;
  }
  $('#profileHandle').value = handle;
  $('#tokenName').value = '';
  $('#tokenSymbol').value = '';
  fillFromHandle();
  $('#launch').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('keydown', (event) => {
  if (event.key === '/' && document.activeElement?.tagName !== 'INPUT') {
    event.preventDefault();
    $('#globalSearch').focus();
  }
});

if (window.ethereum?.on) {
  window.ethereum.on('accountsChanged', (accounts) => {
    state.wallet = accounts?.[0] || null;
    const label = state.wallet ? `${state.wallet.slice(0, 6)}…${state.wallet.slice(-4)}` : 'Connect wallet';
    $('#walletButton span').textContent = label;
    $('#dialogWallet span').textContent = state.wallet ? 'Launch adapter not configured' : 'Connect wallet';
    $('#walletButton').classList.toggle('connected', Boolean(state.wallet));
  });
  window.ethereum.on('chainChanged', () => {
    if (state.wallet) showToast('Network changed. BNB Chain is required before launch');
  });
}
