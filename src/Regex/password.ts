import { resolveRegex } from './index';
import { password } from './regex';

function lowPassword(mdp: string) {
    if (!mdp) throw new TypeError("[Regex-simplify] Missing mdp");
    if(typeof mdp !== 'string') throw new TypeError("[Regex-simplify] mdp param must be a string");
    return resolveRegex(mdp, password.lowPassword);
};
function mediumPassword(mdp: string) {
    if (!mdp) throw new TypeError("[Regex-simplify] Missing mdp");
    if(typeof mdp !== 'string') throw new TypeError("[Regex-simplify] mdp param must be a string");
    return resolveRegex(mdp, password.mediumPassword);
};
function highPassword(mdp: string) {
    if (!mdp) throw new TypeError("[Regex-simplify] Missing mdp");
    if(typeof mdp !== 'string') throw new TypeError("[Regex-simplify] mdp param must be a string");
    return resolveRegex(mdp, password.highPassword);
};

export { lowPassword, mediumPassword, highPassword };