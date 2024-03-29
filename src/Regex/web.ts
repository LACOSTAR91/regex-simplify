import { resolveRegex } from './index';
import { web } from './regex';

function link(link: string) {
    if (!link) throw new TypeError("[Regex-simplify] Missing link");
    if(typeof link !== 'string') throw new TypeError("[Regex-simplify] link param must be a string");
    // if(options && typeof options !== 'object') throw new TypeError("[Regex-simplify] options param must be an object");
    // if(options?.strict && typeof options.strict !== 'boolean') throw new TypeError("[Regex-simplify] options.strict param must be a boolean");
    return resolveRegex(link, web.includeLink);
};
function email(email: string) {
    if (!email) throw new TypeError("[Regex-simplify] Missing email");
    if(typeof email !== 'string') throw new TypeError("[Regex-simplify] email param must be a string");
    return resolveRegex(email, web.email);
};

export { link, email };