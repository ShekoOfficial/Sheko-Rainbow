const Discord = require("discord.js");

exports.run = async(client, message, args) => {

    let facebook = args.slice(0).join('+');

    let link = `https://www.facebook.com/` + facebook;
    if(!facebook)return message.reply(`Enter the name of the Instagram you are looking for!`)
    if(!link)return message.reply("Console error")
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField("Name:", `**${args.slice(0).join(' ')}**`)
    .addField('Link:', `${link}`)
    .setFooter("Foto Profile", message.author.avatarURL);
    message.channel.send(embed);
}

exports.conf = {
    aliases: ['fb'],
    cooldown: "5"
}

exports.help = {
    name: "facebook",
    description: "Searching on Instagram",
    usage: "instagram <The word that is being searched>"
}
