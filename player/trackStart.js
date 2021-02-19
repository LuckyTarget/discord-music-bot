module.exports = (client, message, track) => {
    message.channel.send(`**Playing :notes:** \`${track.title}\` - Now!`);
};