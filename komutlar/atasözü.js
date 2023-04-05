const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const fs = require("fs");

exports.run = (client, message, params) => {
  let user = message.mentions.users.first() || message.author;

  let userinfo = {};
  userinfo.avatar = user.avatarURL();//SentRise was here 
  var Random = [
    "**<:xd:921759548233101332> Acele ile menzil alınmaz.**",
    "**<:xd:921759548233101332> Acı söz insanı dininden çıkarır, tatlı söz yılanı deliğinden çıkarır.**",
    "**<:xd:921759548233101332> Akıllı sır saklar; aptal sır verir.**",
    "**<:xd:921759548233101332> Baba oğluna bir bağ bağışlamış, oğul babaya bir salkım üzüm vermemiş.**",
    "**<:xd:921759548233101332> Bağ dua değil, çapa dua ister.**",
    "**<:xd:921759548233101332> Leyleği kuştan mı sayarsın, yazın gelir, kışın gider.**"
  ];
  var atasozuver = Math.floor(Math.random() * Random.length);
  const atasozu = new Discord.MessageEmbed()
    .setDescription(`${Random[atasozuver]}`)
    .setColor("BLACK")
    .setFooter(
      `${message.author.username} tarafından istendi.`,
      userinfo.avatar
    );
  message.channel.send(atasozu);//SentRise was here 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "atasözü",
  description: "Bot Tarafından Rasgele Atasözleri Gönderilir",
  usage: "atasozu"
};
