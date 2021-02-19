module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'ff9900',
                title: `__${track.title}__`,
                footer: {
                icon_url: `${message.author.displayAvatarURL()}`,
                text: `Command requested by ` + `${message.author.tag}`
                },
                thumbnail: {
                  url: `https://i.gifer.com/2Dn3.gif`
                },
                fields: [
                    { name: 'Channel', value: track.author, inline: true },
                    { name: 'Requested by', value: track.requestedBy.username, inline: true },
                    { name: 'From playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },
                    { name: 'Views', value: track.views, inline: true },
                    { name: 'Duration', value: track.duration, inline: true },
                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Repeat mode', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'Currently paused', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },
                    { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: false }
                ],
                image: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};