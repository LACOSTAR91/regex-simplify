import { resolveRegex } from './index';
import { discord } from './regex';

function invite(data: string) {
    if (!data) throw new TypeError("[Regex-simplify] Missing data");
    if(typeof data !== 'string') throw new TypeError("[Regex-simplify] data param must be a string");
    return resolveRegex(data, discord.invite);
};
function roleMention(mention: string) {
    if (!mention) throw new TypeError("[Regex-simplify] Missing mention");
    if(typeof mention !== 'string') throw new TypeError("[Regex-simplify] mention param must be a string");
    return resolveRegex(mention, discord.roleMention);
};
function userMention(mention: string) {
    if (!mention) throw new TypeError("[Regex-simplify] Missing mention");
    if(typeof mention !== 'string') throw new TypeError("[Regex-simplify] mention param must be a string");
    return resolveRegex(mention, discord.userMention);
};
function channelMention(mention: string) {
    if (!mention) throw new TypeError("[Regex-simplify] Missing mention");
    if(typeof mention !== 'string') throw new TypeError("[Regex-simplify] mention param must be a string");
    return resolveRegex(mention, discord.channelMention);
};
function emojiInfo(emoji: string) {
    if (!emoji) throw new TypeError("[Regex-simplify] Missing emoji");
    if(typeof emoji !== 'string') throw new TypeError("[Regex-simplify] emoji param must be a string");
    // if(!resolveRegex(emoji, discord.emoji)) throw new TypeError("[Regex-simplify] emoji param must be a valid emoji");
    // const emojiInfos = discord.emoji.exec(emoji)?.groups;
    // return { animated: Boolean(emojiInfos?.animated), name: emojiInfos?.name || null, id: emojiInfos?.id || null };
    return resolveRegex(emoji, discord.emoji);
};

export { invite, roleMention, userMention, channelMention, emojiInfo };