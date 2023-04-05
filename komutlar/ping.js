const Discord = require('discord.js');
exports.run = async(client, message) => {



let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField("**__<:2021_Snowsgiving_Emojis_001_Snow:921760127978209360> Gecikme Süresi__**", `**<a:loading:1016003439450411088> ${client.ws.ping}** ms Olarak Hesaplandı.`,true)
message.channel.send(embed)
}


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['p', 'ms'],
permLevel: 0
};

exports.help = {
name: 'ping',
description: 'Botun pingini gösterir',
usage: 'ping' };