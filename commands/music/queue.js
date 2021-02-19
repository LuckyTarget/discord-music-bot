module.exports = {
    name: 'queue',
    aliases: [`q`],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No songs currently playing !`);

        message.channel.send({embed: {
          color: `YELLOW`,
          title: `__Queue for - ${message.guild.name}__`,
          description: `Thanks for using my bot | **[Support Server](https://discord.gg/sQQFSnQhdt)**`,
          footer: {
          icon_url: `${message.author.displayAvatarURL()}`,
          text: `Command requested by ` + `${message.author.tag}`
          },
          thumbnail: {
            url: "https://i.gifer.com/2Dn3.gif"
          },
           fields: [{
             name: "<a:loading:799562690129035294> **__Now playing__**",
             value: `${queue.playing.title}`
           },
           {
            name: `:track_next: **__Next__**`,
            value: (queue.tracks.map((track, i) => {
            return `**${i + 1}.** - ${track.title}`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : ``}`)
           },
           {
            name: `\u200b`,
            value: `\u200b`
           },
           {
            name: "<:online:800996682186620958>**__In playlist__**",
            value: `**[${queue.tracks.length}]** song(s)`
           }
         ],
  }
});

// Song name, song author: ${track.title} | ${track.author}
// Who requested the song: ${track.requestedBy.username}
// message author avatar url: ${message.author.displayAvatarURL()}

    },
};