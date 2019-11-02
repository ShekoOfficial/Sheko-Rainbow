const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const fs = require("fs");
const { handleVideo, queue } = require("../atakoters.js")
const { Util, RichEmbed } = require("discord.js");
const Discord = require('discord.js')
const config = require('../config.json'); // 
const youtube = new YouTube(process.env.YOUTUBE);
  
exports.run = async (bot, msg, args) => {
  let crafty = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!crafty[msg.guild.id]){ 
     crafty[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  //args = args.slice(0)
  const searchString = args.join(' ');
	const url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
  
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.reply('I\'m sorry but you need to be in a voice channel to play music!');
    if (!args[0]) return msg.reply(`Please following the code! : ${crafty[msg.guild.id].prefix}play **[Song Name/URL/Playlist URL]**`)
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.reply('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.reply('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
          let embedplay = new RichEmbed()
          .setColor('#2bbdaf') 
				  .setTitle('Song selection')
				  .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`) 
          .setFooter('Please provide a value to select one of the search results ranging from 1-10.')
					msg.channel.send(embedplay);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.reply('No or invalid value entered, cancelling video selection.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.reply('🆘 I could not obtain any search results.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	}

exports.conf = {
  aliases: ['ps']
}
  
exports.help = {
    name: "play",
    description: "Play your song.",
  usage: "play <title or url from youtube>"
}