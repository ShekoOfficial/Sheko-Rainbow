const Discord = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')

exports.run = async (client, msg, args) => {
  
  let days = Math.floor(client.uptime / 86400000);
  let hours = Math.floor(client.uptime / 3600000) % 24;
  let minutes = Math.floor(client.uptime / 60000) % 60;
  let seconds = Math.floor(client.uptime / 1000) % 60;
  
  let max = 10;
  
  let cpu = Math.round(process.cpuUsage().system)
  
  let cpupercent = Math.round((cpu * max) / 100000 / 10);

  if (isNaN(cpupercent)) cpupercent = 0;
  
  let ClientTag = client.user.tag;
  
  let shard = client.shard
  
  if (shard === null) client.shard = 0;
  if (shard === undefined) client.shard = 0;
  
  const mss = await msg.channel.send('Wait...');
  let diff = mss.createdTimestamp - msg.createdTimestamp;
  
  
  
  let embed1 = new Discord.RichEmbed()
  
  .setColor('BLUE')
  .setTitle('Bot Statistic')
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .setFooter(`© 2019 - 2020 | By » xAndra | ${client.user.tag} Do Not Copied`)
  .addField(':robot: Info', `\`\`\`• Bot Name » ${client.user.tag}\n• Developer » xAndra | Choiril, くん\`\`\``)
  .addField(':satellite: Connection', `\`\`\`• ${shard} Shard\n• ${client.guilds.size} Server\n• ${client.channels.size} Channels\n• ${client.users.size} Users\`\`\``, true)
  .addField(':gear: System', `\`\`\`• Langs » Node.js - v11.14.0\n• Libs » Discord.js - v11.5.1\`\`\``)
  .addField(':floppy_disk: Usage', `\`\`\`• CPU » ${cpupercent}%\n• Memory » ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1)} / ${(os.totalmem() / 1024 / 1024 + 10000).toFixed(1)} MB\n• Uptime » ${days} D ${hours} Hr ${minutes} Mins ${seconds} Sec\`\`\``)
  .addField(':gear: CPU', `\`\`\`Intel(R) Core(TM) I3 - 3217U CPU @ 1.80 Ghz\`\`\``)
  .addField(':bar_chart: Other', `\`\`\`• Arch » x64\n• Platform » linux\n• Latency » ${diff}Ms\n• Gateaway Ping » ${client.ping.toFixed(0)}Ms\`\`\``)
  //mss.edit(embed1)
  
  let embed2 = new Discord.RichEmbed()
  .setColor('BLUE')
  .setAuthor('Support me?', client.user.displayAvatarURL)
  .addField('Invite Me »', '[Click Here!](?)')
  
  
  
  mss.edit(embed1).then(msg => {msg.channel.send(embed2)})
  
}