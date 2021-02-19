module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: `ff9900`,
                    title: `__Commands for - ${message.guild.name}__`,
                    description: `Thanks for using my bot | **[Support Server](https://discord.gg/sQQFSnQhdt)**`,
                    thumbnail: {
                      url: `https://i.gifer.com/2Dn3.gif`
                    },
                    footer: {
                    icon_url: `${message.author.displayAvatarURL()}`,
                    text: `Command requested by ` + `${message.author.tag}`
	                  },
                    fields: [
                        { name: '⚙️ Bot', value: infos },
                        { name: '🎶 Music', value: music },
                    ],
                    timestamp: new Date(),
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    tittle: 'Music - Commands',
                    thumbnail: {
                      url: `https://i.gifer.com/2Dn3.gif`
                    },
                    icon_url: client.user.avatarURL,
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};