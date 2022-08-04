import Discord from './Regex/discord';
import Web from './Regex/web';
import Password from './Regex/password';
import Global from './Regex/global';
import * as regex from './Regex/regex';

const web = new Web(), discord = new Discord(), password = new Password(), global = new Global();
export { web, discord, password, global, regex };