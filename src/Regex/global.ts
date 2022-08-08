import { resolveRegex } from './index';
import { global } from './regex';

function unicodeEmoji(emoji: string) {
    if (!emoji) throw new TypeError("[Regex-simplify] Missing emoji");
    if(typeof emoji !== 'string') throw new TypeError("[Regex-simplify] emoji param must be a string");
    return resolveRegex(emoji, global.unicodeEmoji)
}

function rgb(color: string) {
    if (!color) throw new TypeError("[Regex-simplify] Missing color");
    if(typeof color !== 'string') throw new TypeError("[Regex-simplify] color param must be a string");
    return resolveRegex(color, global.rgb)
}

function hsl(color: string) {
    if (!color) throw new TypeError("[Regex-simplify] Missing color");
    if(typeof color !== 'string') throw new TypeError("[Regex-simplify] color param must be a string");
    return resolveRegex(color, global.hsl)
}

function hex(color: string) {
    if (!color) throw new TypeError("[Regex-simplify] Missing color");
    if(typeof color !== 'string') throw new TypeError("[Regex-simplify] color param must be a string");
    return resolveRegex(color, global.hex)
}

export { unicodeEmoji, rgb, hsl, hex };