module.exports = {
    name: 'info',
    aliases: [],
    category: 'info',
    utilisation: '{prefix}info',

    execute(client, message) {
        message.channel.send(`🔥I'm connected in **${client.voice.connections.size}** Voice Channels!`);


    },
};