const Discord = require('discord.js');

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(` Bu Komutu Kullanabilmek İçin **Üyeleri At** İznine Sahip Olmalısın!`);


if (!message.guild) {

const ozelmesajuyari = new Discord.MessageEmbed()

.setTitle('UYARI')
.setColor('#F9ADC9')
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription('<a:srno:1015943126470361149> Lütfen bu komudu özelde kullanmak yerine ekli olduğum sunucuda kullan.')

return message.author.send(ozelmesajuyari);
}

let guild = message.guild
let reason = args.slice(1).join(' ');
let uye = message.mentions.users.first();//SentRise was here 

 if (message.mentions.users.size < 1) return message.channel.send('<a:srno:1015943126470361149> Lütfen sunucudan atacağınız kişiyi etiketleyin.').catch(console.error);

if (!message.guild.member(uye).bannable) return message.channel.send('<a:srno:1015943126470361149> Belirttiğiniz kişinin Yetkisi Benden Daha Üst Seviyede!');

message.guild.member(uye).kick();//SentRise was here 

message.channel.send("<a:sryes:1015942756776026174> Başarılı, kullanıcı sunucudan atıldı.\n\n Üye ID'si: **"+ uye +"**\n Atılma sebebi: **" + reason + "**")

};

exports.conf = {
  aliases: ['at']//SentRise was here 
};

exports.help = {
  name: 'kick' 
};