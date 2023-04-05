const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");
const { createBar } = require("scryb-bar");
const progressbar = require('string-progressbar');

exports.run = async (client, message) => {
console.log(createBar(5,10))

const ayarlar = require("../ayarlar.json");//SentRise was here 
let prefix = ayarlar.prefix;

 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/QE7p8bt4Hk")


  const botbilgi = new Discord.MessageEmbed()

    .setAuthor(`Sentrise | Discord Bot Bilgi Tablosu`)//SentRise was here 
    .setTitle(``)
    .setColor('#70D7FF')
    .addField(
      "__**Bot Verileri**__",
      `<:boostemote:921760124400451604>  **Toplam Sunucu** **|**  \`${
        client.guilds.cache.size
      }\` \n <:boostemote:921760124400451604>  **Toplam Kullanıcı** **|** \`${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}\` \n <:boostemote:921760124400451604>  **Toplam Kanal** **|** \`${
        client.channels.cache.size
      }\``
    )
    .addField(
      "__**Yetkili Bilgi**__",
      "<a:ta:1016036125539848272> **Bot Sahibi**  <@963136900540022855> \n<a:ta:1016036125539848272> **Bot Yöneticisi**  <@966692929840242748>"
)
 .addField(
      "__**Ram Kullanımı**__",
      ` **<a:yukleniyor:921759554574884904>**  Üzerinde çalışılıyor`
    )
    .addField(
      "__**Sürümler**__",
      `<a:5847discordon:1011662552272486501> **Discord.js Sürümü** **|**  \`v${Discord.version}\` \n <a:5847discordon:1011662552272486501>  **Node.js Sürümü** **|**  \`${process.version}\``
    )
    .addField(
      "__**Gecikmeler**__",
      `<a:loading:1016003439450411088> \`${client.ws.ping}\` **MS**`,//SentRise was here 
      true
    
    ); 
  

let msg =  message.channel.send({embed: botbilgi , buttons: [ buton1 ]});


};

exports.conf = {
  enabled: true,
  guildOnly: false,//SentRise was here 
  aliases: ["bb"],
  permLevel: 0
};

exports.help = {
  name: "botbilgi",
  description: "",
  usage: ""
};
