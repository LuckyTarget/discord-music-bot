module.exports = {
  name: "invite",
  category: 'Infos',
  utilisation: '{prefix}invite',


    execute(client, message) {
        message.channel.send(`https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=70282305&scope=bot`);
     },
};