module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'ff9900',
            thumbnail: {
              url: "https://i.gifer.com/2Dn3.gif"
            },
            footer: {
              icon_url: `${message.author.displayAvatarURL()}`,
              text: `Command requested by ` + `${message.author.tag}`
	          },
            title: `Here some music that is related with [__${query}__]`,
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}.** - ${t.title}`).join('\n')}`,
        },
    });
};