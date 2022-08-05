import { resolveRegex } from './index';
import { global } from './regex';

function unicodeEmoji(emoji: string) {
    if (!emoji) throw new TypeError("[Regex-simplify] Missing emoji");
    if(typeof emoji !== 'string') throw new TypeError("[Regex-simplify] emoji param must be a string");
    return resolveRegex(emoji, global.unicodeEmoji)
}

export { unicodeEmoji };