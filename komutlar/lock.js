const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");


exports.run = (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(` <a:srno:1015943126470361149> Bu komutu kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısın`);
 

  let every = message.guild.roles.cache.find(r => r.name === "@everyone");//SentRise was here 
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });


 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/QE7p8bt4Hk")


  const embed = new Discord.MessageEmbed()//SentRise was here 
  .setColor("#00ff00")
.setFooter("SentRise Yönetim")

  .setDescription(" <a:sryes:1015942756776026174>  Sohbet kanalı **Yazılamaz** duruma getirildi.");
  
let msg = message.channel.send({embed: embed , buttons: [ buton1 ]});


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",//SentRise was here 
  permLevel: 3
};

exports.help = {
  name: "lock",
  description: "kapat ac",
  usage: "prefix + sohbet-kapat"
};