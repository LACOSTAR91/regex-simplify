import { resolveRegex } from './index';
import { global } from './regex';

export default class Global {
    isUnicodeEmoji(emoji: string): boolean {
        if (!emoji) throw new TypeError("[Regex-simplify] Missing emoji");
        if(typeof emoji !== 'string') throw new TypeError("[Regex-simplify] emoji param must be a string");
        return resolveRegex(emoji, global.unicodeEmoji).include
    }
}