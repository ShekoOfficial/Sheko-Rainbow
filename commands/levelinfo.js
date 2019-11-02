const Discord = require("discord.js");

exports.run = async (client, msg) => { // eslint-disable-line no-unused-vars

     //Defines Embed
    let embed = new Discord.RichEmbed()
        .setAuthor(`Hello, Atako Lovers this information level up!`)
        .setColor(`#741243`)
        .setDescription("Board about to move up to the level!.\n\n")
        .addField(`Level Information`, `**Level 1 = 10 XP,** To move up to a higher level! 🎉\n**Level 2 = 50 XP,** To move up to a higher level! 🎉\n**Level 3 = 100 XP,** To move up to a higher level! 🎉\n**Level 4 = 200 XP,** To move up to a higher level! 🎉\n**Level 5 = 400 XP,** To move up to a higher level! 🎉\n**Level 6 = 800 XP,** To move up to a higher level! 🎉\n**Level 7 = 1300 XP,** To move up to a higher level! 🎉\n**Level 8 = 1500 XP,** To move up to a higher level! 🎉\n**Level 9 = 1900 XP,** To move up to a higher level! 🎉\n**Level 10 = 2300 XP,** To move up to a higher level! 🎉\n**Level 11 = 3000 XP,** To move up to a higher level! 🎉\n**Level 12 = 3500 XP,** To move up to a higher level! 🎉\n**Level 13 = 4500 XP,** To move up to a higher level! 🎉\n**Level 14 = 5500 XP,** To move up to a higher level! 🎉\n**Level 15 = 6100 XP,** To move up to a higher level! 🎉\n**Level 16 = 6600 XP,** To move up to a higher level! 🎉\n**Level 17 = 7100 XP,** To move up to a higher level! 🎉`)
        
  
    let embed2 = new Discord.RichEmbed()
  
  .setColor(`#741243`)
 .addField('Continue Board about to move up to the level!','**Level 18 = 7600 XP,** To move up to a higher level! 🎉\n**Level 19 = 8100 XP,** To move up to a higher level! 🎉\n**Level 20 = 10000 XP,** To move up to a higher level! 🎉')
 .setFooter("Awnbao management")
 .setTimestamp()

  msg.channel.send(embed).then(msg => {
    
    msg.channel.send(embed2).then(msg =>{msg.react("✅")});
    
  })
  // This is will be send The Embed
}



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