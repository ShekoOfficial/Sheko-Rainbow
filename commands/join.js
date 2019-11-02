module.exports.run = async (client, message, args) => {
    const voiceChannel = message.member.voiceChannel;
    if (!message.member.voiceChannel) { return message.reply("You are not in a voice channel, baka! Don't force me to be lonely!"); }
    const permissions = message.member.voiceChannel.permissionsFor(message.guild.me);
    if (permissions.has("CONNECT") === false) { return message.reply(":x: I do not have enough permissions to connect to your voice channel. I am missing the Connect permission."); }
    if (permissions.has("SPEAK") === false) { return message.reply("Wow. Invite me to play music for you, yet I can't speak in the channel. You're more heartless than my owner. Give me the channel permission to speak and then come back and invite me."); }
    message.member.voiceChannel.join();
    return message.channel.send({
        embed: {
            description: `Now tuned into: ${message.member.voiceChannel}. Ready and awaiting orders!`
        }
    })
}