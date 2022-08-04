import { resolveRegex } from './index';
import { password } from './regex';

export default class Password {
    lowPassword(mdp: string) {
        if (!mdp) throw new TypeError("[Regex-simplify] Missing mdp");
        if(typeof mdp !== 'string') throw new TypeError("[Regex-simplify] mdp param must be a string");
        return resolveRegex(mdp, password.lowPassword);
    };
    mediumPassword(mdp: string) {
        if (!mdp) throw new TypeError("[Regex-simplify] Missing mdp");
        if(typeof mdp !== 'string') throw new TypeError("[Regex-simplify] mdp param must be a string");
        return resolveRegex(mdp, password.mediumPassword);
    };
    highPassword(mdp: string) {
        if (!mdp) throw new TypeError("[Regex-simplify] Missing mdp");
        if(typeof mdp !== 'string') throw new TypeError("[Regex-simplify] mdp param must be a string");
        return resolveRegex(mdp, password.highPassword);
    };
};