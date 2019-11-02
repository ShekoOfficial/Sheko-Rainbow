/*
  Create by : H29id
  Community : Discordbots Nation
*/

const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply("Please ask a full question!");
    let replies = [ `:8ball: | Yes, Certainly, **${message.author.username}**`,
    `:8ball: | No, Never, **${message.author.username}**`,
    `:8ball: | Please ask again, **${message.author.username}**`,
    `:8ball: | Nah, **${message.author.username}**`,
    `:8ball: | Of course, **${message.author.username}**` ]
    let result = Math.floor((Math.random() * replies.length));

    let question = args.slice().join(" ");
    message.channel.send(replies[result])
};
exports.help = {
    name: "8ball"
}
