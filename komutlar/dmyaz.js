const Discord = require('discord.js');
let ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix;


exports.run = function(client, msg) {
//Kodlar
  let mesaj = msg.mentions.members.first();
let msgd = msg.content.substring(3);
if(!mesaj){
  msg.reply('**❌ DM atmam için bir kullanıcı etiketlemelisin.! ['+prefix+'dm Mesaj @Kullanıcı]**');
}if(mesaj){
  if(!msg.member.hasPermissions("ADMISTRATOR")){
    msg.reply('**❌ Yetkiniz yetmiyor..**');
  }else{
    const Embed = new Discord.RichEmbed()
    .setTitle('Bir mesaj')
    .setDescription('Sana bir mesaj geldi;\n**'+msgd+'**')
    if(msg.author.id === 'fynx'){ //sahip id
      mesaj.send(Embed);
      msg.reply('**Mesaj gönderildi! ✅**');
    }if(msg.author.id === 'fynx'){ //sahip id
         mesaj.send(Embed);
      msg.reply('**Mesaj gönderildi! ✅**');            // €LĘCTUS#0001
    }
    else{
      msg.reply('**❌Bunu yapamazsınız....**');
    }
  }
}
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['dm'], 
  permLevel: 4
};

exports.help = {
  name:'dm', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirlediğiniz kişiye DMden mesaj atar.', //açıklaması
  usage: 'dm' //komutun kullanım şekli (mesela hava <bölge>)
};