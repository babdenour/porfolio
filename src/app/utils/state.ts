import { proxy } from "valtio";

const state = proxy({
  lang: 'en',
  flag: '🇫🇷',
});

export { state };