const { RichEmbed } = require('discord.js');
const { GOOGLE_API_KEY } = process.env;
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const volume = require('../commands/volume.js')

async function playCommand(client, msg, args){
	if(!args.length) return msg.channel.send(exports.help.usage, { code: 'asalWehCodemah' });
	try{
		if(!GOOGLE_API_KEY) throw TypeError('NO GOOGLE KEY IN ENV >:(');
		const youtube = new YouTube(GOOGLE_API_KEY);
		
		const vc = msg.member.voiceChannel;
		if(!vc) return msg.reply('I\'m sorry but you need to be in a voice channel to play music!');
   // if (![0]) return msg.reply(`Please following the code! : at!play **[Song Name/URL/Playlist URL]**`)
		if(!vc.permissionsFor(client.user).has(['CONNECT', 'SPEAK'])) return msg.reply('🚫 | Missing perm **CONNECT** or **SPEAK**');
    //if (!args[0]) return msg.reply(`Please following the code! : **at!play [Song Name/URL/Playlist URL]**`)
		if(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/.test(args[0])){
			const playlist = await youtube.getPlaylist(args[0]);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const vid = await youtube.getVideoByID(video.id);
				await handleVideo(vid, msg, vc, true);
			}
			return msg.reply(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		}
		if(/https?:\/\//gi.test(args[0])){
			const video = await youtube.getVideo(args[0]);
			return handleVideo(video, msg, vc);
		}
		const videos = await youtube.searchVideos(args.join(' '), 1);
		if(!videos.length) return msg.reply('🚫 | No result found');
		const video = await youtube.getVideoByID(videos[0].id);
		return handleVideo(video, msg, vc);
	} catch (err) {
		return msg.channel.send(err.stack, { code: 'ini' });
	}
}

async function handleVideo (video, msg, voiceChannel, hide = false){
	const queue = msg.client.queue.get(msg.guild.id);
	const song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`,
		author: msg.author,
		video
	}
	if(!queue){
		try{
			const thisMess = await msg.reply('Joining the voice channel, please wait!');
			const connection = await voiceChannel.join();
			const Queue = {
				channel: msg.channel,
				voiceChannel,
				connection,
				songs: [song],
				volume: 100,
				playing: true,
				loop: false
			}
			thisMess.delete();
			msg.client.queue.set(msg.guild.id, Queue);
			return play(msg, song);
		}catch(e){
			msg.client.queue.delete(msg.guild.id);
			return msg.channel.send(e.stack, { code: 'diff' } );
		}
	}
	queue.songs.push(song);
	if(!hide) return msg.reply(`**:white_check_mark: ${song.title}** has been successfully added to queue!`);
}

function play(msg, song){
	const queue = msg.client.queue.get(msg.guild.id);
	if(!song){
		queue.voiceChannel.leave();
		return msg.client.queue.delete(msg.guild.id);
	}
	const vid = ytdl(song.url, {filter: 'audioonly' });
	const dispatcher = queue.connection.playStream(vid)
	.on('end', res => {
		const shifed = queue.songs.shift();
		if(queue.loop) queue.songs.push(shifed);
		play(msg, queue.songs[0]);
	})
	.on('error', console.error);
	dispatcher.setVolumeLogarithmic(queue.volume /100);
	queue.channel.send(`${msg.author} 🎶 **Now playing ${song.title}**`);
}

this.conf = {
	aliases: ['p'],
	cooldown: 2
}

this.help = {
	name: 'play',
	description: 'play song using youtube videos',
  usage: 'Please following the code! : at!play [Song Name/URL/Playlist URL]'
}

this.run = playCommand;