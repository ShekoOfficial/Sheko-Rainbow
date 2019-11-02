const play = require('../commands/play.js')
//const playsearch = require('..commands/playsearch.js')
exports.run = async (client, msg, args) => {
	const serverQueue = client.queue.get(msg.guild.id);
	if (!msg.member.voiceChannel) return msg.reply('You must join voice channel first');
	if(serverQueue.voiceChannel.id !== msg.member.voiceChannel.id) return msg.reply(`You must be in **${serverQueue.voiceChannel.name}** to loop the queue`);
	if(!serverQueue) return msg.reply('Are you sure? nothing to loop because queue is empty');
	try{
		serverQueue.loop = !serverQueue.loop;
		if(serverQueue.loop) return msg.reply('The loop is on');
		return msg.reply('The loop is off');
	}catch(e){
		return msg.reply(`Oh no an error occured :( \`${e.message}\` try again later`);
	}
}

exports.conf = {
  aliases: [],
  clientPerm: '',
  authorPerm: ''
}

exports.help = {
  name: 'loop',
  description: 'Loop the current queue!',
  usage: 'loop',
  example: ['loop']
}