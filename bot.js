const Discord = require('discord.js');
const forEachTimeout = require('foreach-timeout');
const client = new Discord.Client();
const colors = ["eea3a3","eea3a3","b9eea3","a3eedb","a3ccee","b9a3ee","eea3e1","f5a0b3","fdf5f5","131212"];
const stop = [];
async function color () {
    forEachTimeout(colors, (color) => {
        client.guilds.forEach((guild) => {
                if (!stop.includes(guild.id)) {
                let role = guild.roles.find('name', 'Rainbow');
                if (role && role.editable) 
                    role.setColor(color);
            }  
        })
    }, 1000).then(color);
}
client.on('ready', () => {
    color();
});
client.on('guildCreate', (guild) => {
    let channels = guild.channels.filter(channel => channel.type === 'text' && channel.permissionsFor(guild.members.get(client.user.id)).has('SEND_MESSAGES'));
    if (channels.size > 0) channels.first().send('You have invited bots **Role of Rainbow** to do it right.\n To function correctly, you must have the `Rainbow` role on the server, the role of the bot must have the right role `management` and be above the `Rainbow` role.\n There is a command to control the bot:\n`::stop` - stops changing the color of the role of the rainbow\n`::start` - returns the color change of the rainbow role\n**Both command require `Administrator` right of `Server Management`!**\n\If you have difficulties - contact <@ 501667875967336458> (Choiril # 2825)');
});
client.on('message', (message) => {
    if (message.channel.type !== 'text') return;
    if (message.member.hasPermission('MANAGE_GUILD') || message.member.hasPermission('ADMINISTRATOR') || message.member.id === message.guild.owner.id) {
        if (message.content === '::stop') {stop.push(message.guild.id); return message.channel.send('**Rainbow role has been disable**:x:');}
        if (message.content === '::start') {stop.splice(stop.indexOf(message.guild.id),1); return message.channel.send('**Rainbow role has been active** :white_check_mark:');}
    }
})
client.login(process.env.TOKEN);
