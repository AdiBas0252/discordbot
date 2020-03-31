const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');

client.user.setActivity('Dm Staff voor hulp!')

});

const prefix = ':'

client.on('message', message => {
	if (message.content === 'hallo') {
		message.channel.send(`Hey, ${message.author.toString()}, leuk dat je er bent!`)
	}

	if (message.content === `!members`){
		message.channel.send(`Total member: ${message.guild.memberCount}`)
	}

	if (message.channel.id === '689456936843739156') {
		if (message.content.startsWith('?inschrijven')) {
	} else {
		message.delete()
		message.author.send('De Command is niet goed gegaan! Gebruik #📝inschrijven altijd voor de ?inschrijven command!')
	}
}

	if (message.channel.id === '689513084255076572') {
		if (message.content.startsWith('?suggest')) {
} else {
	message.delete()
	message.author.send('De Command is niet goed gegaan! Gebruik #❗suggestions altijd voor de ?suggest command!')
}
}

if (message.channel.id === '689539454800494622') {
	if (message.content.startsWith('?klaag')) {
} else {
	message.delete()
	message.author.send('De Command is niet goed gegaan! Gebruik #❌problemen altijd voor de ?klaag command!')
}
}

if (message.channel.id === '693112640838434910') {
	if (message.content.startsWith('?agree')) {
} else {
	message.delete()
	message.author.send('De Command is niet goed gegaan! Gebruik #🐣welkom altijd voor de ?agree command!')
}
}

});




client.login('NjkzODY0MDA4ODYzOTczNDAw.XoDUTg.4pkSUp7rdv74d4Vumv2fc_CRTa4');
