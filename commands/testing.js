const Discord = require("discord.js");
const Jimp = require("jimp");
exports.run = (client, message, args) => {
    var avatar = message.author.avatarURL;
    var nick = message.author.username;
    Jimp.read("", function(blad, zdjecie) {
        Jimp.read(avatar, function(bladd, zdjeciee) {
            zdjeciee.resize(72, 72);
          zdjecie.composite(zdjeciee, 12 , 168);
          Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(font => {
            zdjecie.print(font, 100, 190, nick)
            zdjecie.write("profile-" + message.author.username + ".png");
        }); 
      });
    });
    message.channel.send({
        files: ['profile-' + nick + ".png"]
      })
}