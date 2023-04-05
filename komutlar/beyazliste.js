const db = require('croxydb')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
   const dbengel = require('croxydb')
          const i = await dbengel.fetch(`engel_${message.channel.id}`); // \\
    if (i == 'acik') return message.reply("Burada Komut Kullanımı Kapalı")
 
  let nesne = args[0]
  if (!nesne) return message.channel.send("<a:srno:1015943126470361149> Bir kullanıcı ID'si belirtiniz.")
  
  db.delete(`kara_${nesne}`)
  
        message.channel.send(`<a:sryes:1015942756776026174> ${nesne} ID'li Kullanıcı karalisteden çıkartılmıştır.`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'beyazliste',
  description: '[Admin Komutu]',
  usage: 'karaliste ID'
};