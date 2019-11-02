const Discord = require("discord.js");

exports.run = async (client, message) => { // eslint-disable-line no-unused-vars

    // Defines Embed
    /*let embed = new Discord.RichEmbed()
        .setAuthor(`Hello, Awnbao members this update for adding new commands!`)
        .setColor(`#741243`)
        .setDescription("This update aims to fix bug problems with bots.\n\n")
        .addField(`Update`, `Command updates and adding some\nupdate commands to the music will be better and do not reverberate\nupdates Welcome\nlevel up commands can be used properly`)
        .addField(`Message Send`, message.guild.owner.id.toString(), true)
        .addField(`Update Available`, `v1.0.2.6`)
        .setFooter("Awnbao management")
        .setTimestamp()*/
  
    message.channel.send(`Sorry to mention you @everyone Daily version update due to problems and I will replace the daily DB! version 1.0.2.7 available!`)
            message.channel.send({
          //  embed: embed
            })   

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "ayako",
    category: "Miscelaneous",
    description: "Display a list of the community rules",
    usage: "ping"
};