const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let role = message.guild.roles.find(role => role.name === 'Verified');
    if (message.channel.name !== 'verify') return message.reply('If you want to make verification work please create a **verify** channels.\nAnd create a role to verify the member with the name of the **Verified** role.\n`EXAMPLE:`\n**1.SETUP CREATE ROLE**\n`Go to ~> Server Settings ~> Roles Search ~> Raise the stakes of Athuko Role Name to the highest ~> Create Role Name: Verified`\n**2.SETUP CREATE CHANNELS**\n`Create Channels ~> Verify ~> Verify Commands Succes Use!`\n**Thanks for read help verify, Oppa!**');
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Your account has already been verified!')
          //  .setFooter(`If you have bug, pls use at!bugreport!`)
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Your account has been successfully verified.')
        return message.channel.send((verifyEmbed));
    }
}

module.exports.help = {
    name: 'verify',
    description: 'you must have the Verified role'
}