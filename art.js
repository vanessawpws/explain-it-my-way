// Little kawaii stickers, drawn as inline SVG so the site needs no image files.
// ART[conceptId] is shown next to the topic and on the story card.
// ART.custom is used for topics you type in yourself.

const INK = "#3b2a50";

const sticker = (inner) =>
  `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${inner}</svg>`;

// A simple happy face: two dot eyes, rosy cheeks, a tiny smile.
const face = (cx, cy) => `
  <ellipse cx="${cx - 12}" cy="${cy}" rx="3.2" ry="4.2" fill="${INK}"/>
  <ellipse cx="${cx + 12}" cy="${cy}" rx="3.2" ry="4.2" fill="${INK}"/>
  <ellipse cx="${cx - 21}" cy="${cy + 8}" rx="6" ry="3.6" fill="#ff8fb8" opacity="0.8"/>
  <ellipse cx="${cx + 21}" cy="${cy + 8}" rx="6" ry="3.6" fill="#ff8fb8" opacity="0.8"/>
  <path d="M${cx - 5} ${cy + 7} Q${cx} ${cy + 13} ${cx + 5} ${cy + 7}" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/>`;

const sparkle = (x, y, s, fill = "#ffd84d") => {
  const k = s * 0.28;
  return `<path d="M${x} ${y - s} L${x + k} ${y - k} L${x + s} ${y} L${x + k} ${y + k} L${x} ${y + s} L${x - k} ${y + k} L${x - s} ${y} L${x - k} ${y - k} Z" fill="${fill}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>`;
};

const ART = {
  // A tiny stack of friendly servers.
  "data-center": sticker(`
    <rect x="18" y="12" width="84" height="28" rx="10" fill="#ffc6dc" stroke="${INK}" stroke-width="3"/>
    <circle cx="84" cy="26" r="3.5" fill="#7ee0a8" stroke="${INK}" stroke-width="2"/>
    <circle cx="94" cy="26" r="3.5" fill="#ffd84d" stroke="${INK}" stroke-width="2"/>
    <path d="M30 26 H60" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
    <rect x="18" y="44" width="84" height="34" rx="10" fill="#e4d9ff" stroke="${INK}" stroke-width="3"/>
    ${face(50, 60)}
    <circle cx="86" cy="54" r="3.5" fill="#7ee0a8" stroke="${INK}" stroke-width="2"/>
    <circle cx="86" cy="66" r="3.5" fill="#ff8fb8" stroke="${INK}" stroke-width="2"/>
    <rect x="18" y="82" width="84" height="28" rx="10" fill="#c9f0dc" stroke="${INK}" stroke-width="3"/>
    <circle cx="84" cy="96" r="3.5" fill="#ffd84d" stroke="${INK}" stroke-width="2"/>
    <circle cx="94" cy="96" r="3.5" fill="#7ee0a8" stroke="${INK}" stroke-width="2"/>
    <path d="M30 96 H60" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
    ${sparkle(106, 14, 9)}`),

  // A sprout in a pot: something that learns and grows.
  "machine-learning": sticker(`
    <path d="M60 78 Q60 62 60 46" fill="none" stroke="${INK}" stroke-width="9" stroke-linecap="round"/>
    <path d="M60 78 Q60 62 60 46" fill="none" stroke="#7fdca0" stroke-width="4" stroke-linecap="round"/>
    <path d="M60 52 C40 52 30 38 34 28 C50 27 60 36 60 52 Z" fill="#8be6ad" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M60 46 C62 26 78 14 94 18 C96 36 82 48 60 46 Z" fill="#a6efc0" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M32 80 H88 L82 110 Q81 112 79 112 H41 Q39 112 38 110 Z" fill="#ffb27a" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <rect x="28" y="72" width="64" height="12" rx="6" fill="#ff9a5c" stroke="${INK}" stroke-width="3"/>
    ${face(60, 95)}
    ${sparkle(100, 52, 9)}`),

  // A chat bubble: a program that talks.
  llm: sticker(`
    <path d="M36 18 H84 A22 22 0 0 1 106 40 V58 A22 22 0 0 1 84 80 H60 L32 102 L38 80 H36 A22 22 0 0 1 14 58 V40 A22 22 0 0 1 36 18 Z" fill="#ffd6e8" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    ${face(60, 46)}
    <circle cx="48" cy="68" r="2.6" fill="${INK}"/>
    <circle cx="60" cy="68" r="2.6" fill="${INK}"/>
    <circle cx="72" cy="68" r="2.6" fill="${INK}"/>
    ${sparkle(104, 14, 10)}`),

  // A padlock with a face: keeping secrets.
  encryption: sticker(`
    <path d="M40 52 V38 A20 20 0 0 1 80 38 V52" fill="none" stroke="${INK}" stroke-width="13" stroke-linecap="round"/>
    <path d="M40 52 V38 A20 20 0 0 1 80 38 V52" fill="none" stroke="#e4d9ff" stroke-width="7" stroke-linecap="round"/>
    <rect x="24" y="50" width="72" height="56" rx="17" fill="#ffd84d" stroke="${INK}" stroke-width="3"/>
    ${face(60, 74)}
    ${sparkle(104, 20, 9, "#ff8fb8")}`),

  // For topics you type in yourself: a happy star.
  custom: sticker(`
    <path d="M60 10 L73 41 L106 44 L81 66 L89 98 L60 81 L31 98 L39 66 L14 44 L47 41 Z" fill="#ffd84d" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    ${face(60, 58)}`),
};
