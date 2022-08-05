const { global, web, discord, password, regex } = require('../lib/regex');

const invite = discord.invite(`
    https://discord.gg/7prqAjux
    https://discord.com/invite/7prqAjux
    discord.gg/7prqAjux
    https://discord.com/7prqAjux
`);

console.log(invite);