module.exports = {
    name: 'ping',
    aliases: [`ms`],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`🔥Pong - **${client.ws.ping}ms**`);
    },
};