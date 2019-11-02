const Discord = require("discord.js");

exports.run = async (client, message) => { // eslint-disable-line no-unused-vars

    // Defines Embed
    /*let embed = new Discord.RichEmbed()
        .setAuthor(`Update Version Limited 2.4`)
        .setColor(`#741243`)
        .setDescription("Updates are carried out every Thursday while the update is delayed.\n\n")
        .addField(`Update`, `You can check the update with Giphy Ayako and check it with ~ play.`)
        .addField(`Appeal`, `Do not make transactions at the time of update because it can make your discord problem!.`)
        .addField(`Send Message`, `Aril✓#2825`)
        .addField(`Mention`, `@everyone`)
        .setImage('https://media.discordapp.net/attachments/572991311708422146/573138098733449222/cats.jpg')
        .setFooter('Ayako Official', 'https://images.discordapp.net/avatars/572975377291542540/3f072d9e622028ab3ff8657f0d62a226.png?size=512')*/;

    message.reply(`If you buy premium bots please DM **Awn#4778**!`)
            message.channel.send({
            //embed: embed
        })   

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "ayako",
    category: "Miscelaneous",
    description: "Display a list of the community rules",
    usage: "ping"
};