const { global, web, discord, password, regex } = require('../lib/regex');

const invite = web.isLink(`
https://discord.gg/test/image.png?query=test#anchor
http://192.168.1.1
http://192.168.1.1:5555
http://username:password@domain.com
`);
console.log(invite);