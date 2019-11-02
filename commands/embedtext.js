const Discord = require('discord.js');

exports.run = async (client, message, args, color) => {

    let specifyembed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setDescription(`${message.author}, Write something to make words embed.`)
        .setTimestamp();

    var text = args.join(" ");
    if (!text) return message.channel.send(specifyembed);

    let postMsg = await message.reply('**Please waiting for embed...**');
    let embedsay = new Discord.RichEmbed()
        .setColor("BLUE")
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`${text}`);
        message.channel.send(embedsay).then(() => { postMsg.delete();});
};

exports.conf = {
    aliases: ['embed'],
    cooldown: '10'
};

exports.help = {
    name: "embedtext",
    description: "Order what you want!",
    usage: "embed <text/message>"
};