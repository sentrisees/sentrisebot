const Discord = require("discord.js");
const db = require("croxydb");
const client = new Discord.Client();
const disbut = require('discord-buttons')
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const disbut = require('discord-buttons')
  
                 
   if (!message.guild) {
      let button32 = new disbut.MessageButton()
    .setStyle("url")
    .setURL("https://discord.com")
    .setLabel("Destek Sunucusu")
    .setEmoji("1016823179819364503");
  const ozelmesajuyari = new Discord.MessageEmbed()
.setColor("GREEN")
  .setDescription("Bu komutu sâdece sunucularda kullanabilirsiniz.")
  return message.author.send(ozelmesajuyari, button32); }
  
  
              let button = new disbut.MessageButton()
    .setStyle("url")
    .setURL("https://discord.com")
    .setLabel("Destek sunucusu")
    .setEmoji("1016823179819364503");
            
        const member3 = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`Bu komutu kullanabilmek için  <:staff:1012732236921065597> **Görevli** olmalısın!`);
  if (!message.member.permissions.has("MANAGE_CHANNELS"))
    return message.channel.send(member3, button);
  if (message.channel.type !== "text") return;
  const limit = args[0] ? args[0] : 0;
  if (!limit) {
    var embed = new Discord.MessageEmbed()
      .setDescription(` Uygun Kullanım: ${ayarlar.prefix}yavaşmod <**Saniye**>`)
.setColor("GREEN")
    message.channel.send({ embed, button });
    return;
  }
  if (limit > 21600) {
const embedss = new Discord.MessageEmbed()
        .setDescription(
          "<:yavasmod:1013912777921921165> Yavaş mod en fazla **6 saat** olabilir."
)
    return message.channel.send({ embedss, button })
  }
const embedssss = new Discord.MessageEmbed()
      .setDescription(
        `<#${message.channel.id}> kanalının <:yavasmod:1013912777921921165> yavaş modu **${limit} saniye** olarak ayarlandı.`
      )
  message.channel.send(embedssss, button);
  var request = require("request");
  request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
      rate_limit_per_user: limit
    },
    headers: {
      Authorization: `Bot ${client.token}`
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "yavas-mod", "yavasmod", "yavaşmod"],
  permLevel: 1
};

exports.help = {
  name: "slowmode",
  description: "Sohbete yazma sınır (süre) ekler.",
  usage: "slowmode [1/20]"
};