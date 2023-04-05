const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");
const db = require("quick.db");

exports.run = (client, message, args) => {

 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/QE7p8bt4Hk")


message.reply("Bu komut **SentRise Pro**'ya taşınmıştır. Bu komutu kullanmak için Pro üyeliğinizin bulunması gerekiyor",{buttons:[buton1]})




};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["güvenliksıfırla"],//SentRise was here 
  permlevel: 4
};

exports.help = {
  name: "güvenlik-sıfırla",
  description: "güvenlik sıfırlar.",
  usage: "s!güvenliksıfırla"
};
