//This command will be required package discord.js
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../config.json");
const fs = require("fs");

exports.run = async(client, msg, args) => { // Modification
  let crafty = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!crafty[msg.guild.id]){ 
     crafty[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  //if (!args[0]) {
    
    let embed1 = new RichEmbed()
    .setColor('BLUE')
    .setTitle(`${client.user.username}'s Help List!`)
    .setAuthor(`My prefix is ${crafty[msg.guild.id].prefix}`, client.user.displayAvatarURL)
    .setThumbnail(client.user.displayAvatarURL)
    .setTimestamp()
    .setFooter(`Created By | CraftyBoat Team's`)
    .addField(":hammer_pick: Utility", `Use \`${crafty[msg.guild.id].prefix}Utility\``)
    .addField(":musical_note: Music", `Use \`${crafty[msg.guild.id].prefix}Music\``)
    .addField(":money_with_wings: Economy [Beta 2.1]", `Use \`${crafty[msg.guild.id].prefix}Economy\``)
    .addField(":warning: Administrator", `Use \`${crafty[msg.guild.id].prefix}Administrator\``)
    .addField(":lock: Developer", `Use \`${crafty[msg.guild.id].prefix}Developer\``)
    .addField(":helmet_with_cross: Support Bot", `Use \`${crafty[msg.guild.id].prefix}Developer\``)
    
    let embed2 = new Discord.RichEmbed()
  
  .setColor('BLUE')
 .addField('Invite Me »','[Click Here!](https://discordapp.com/oauth2/authorize?client_id=628587789667008549&scope=bot&permissions=2146958591)', true)
  .addField('Official Server Bot »', '[Click Here!](https://discord.gg/EuEUBSu)')
  .addField('Subscribe Developer »', '[Click Here!](https://www.youtube.com/channel/UCaB6NwTJ-UlLsk4YiOvqEDQ?sub_confirmation=1)')
  .addField('How To Use Atakoo »', '[Click Here!](https://youtu.be/O1Y3Ke7Sd-s)')
  
  

   // msg.channel.send(embed1).then(m => m.channel.send(embed2))
    
  //}
  
  let embed = new Discord.RichEmbed()  // This is a defined for Embed
  .setColor('BLUE') // This is a color for The Embed
  .setTitle(`${client.user.username}'s Help Commands`) // This for A Title in from Embed
  .setAuthor(`My prefix is ${crafty[msg.guild.id].prefix}`, client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter(`@Copyright all right reversed Awn Developers!`)
  .addField(":hammer_pick: Utility", "**avatar, ping, help, say, botinfo, serverinfo, afk [Dev Mode], poll, serverrole, bugreport, premium, svs, profile, user [Mention User]**")
  .addField(":key: Verify User", "**verify [User Add Verification], unverify [User Remove Verification]**")// You cant add The Command in Here and You cant add Any more field for The Type Commands
  .addField(":warning: Administrator", "**modlog, clear, report, ban, kick, prefix, mute, unmute, welcomer, embedtext**")// This is page two of the field
  .addField(":money_with_wings: Economy [Beta 2.1]", "**balance, daily, pay, work, mine**") // This is page three of the field and you know you can't add ; in all field! in the end field you can add 
  .addField(":musical_note: Music", "**play, playsearch, skip, stop, volume, np, queue, pause, resume, dc, loop, shuffle**")
  .addField(":trophy: Leveling", "**setLevel [Do it first to see your level], level, levelinfo, invleaderboard, createinvite**")
  .addField(":military_medal: Entertaiment", "**bond, 8ball, quiz, roll, slot joke, anime, animeme**")
  .addField(":tada: Special", "**ship, pat, clap, bond, hug, kiss, tickle**")
  .addField(":satellite: Media Sosial", "**instagram, facebook**")
  .addField(":lock: Developer", "**eval, exec, restart**")
  msg.channel.send(embed).then(msg => {
    
    msg.channel.send(embed2).then(message =>{message.react("✅")});
    
  })
  // This is will be send The Embed
}
// Let's test it out!


exports.conf = {
  aliases: ['h']
}

exports.help = {
  name: "Help"
}