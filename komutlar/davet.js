const Discord = require("discord.js");//SentRise was here 
const { MessageButton } = require("discord-buttons");

exports.run = (client, message) => {

 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/QE7p8bt4Hk")

 let buton2 = new MessageButton()
    .setStyle("url")
    .setLabel("Sunucuna ekle")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=1015909809771515974&permissions=8&scope=bot%20applications.commands")

  let davet = new Discord.MessageEmbed()
    .setAuthor("SentRise")
    .setColor('#70D7FF')
.setDescription("<:boostemote:921760124400451604>  Sunucunuzun bot ihtiyacını tek başına büyük ölçüde azaltan SentRise'yi Sunucunda denemeye ne dersin?")  
.setFooter("SentRise - 2023")
    .setTimestamp()


let msg =  message.channel.send({embed: davet , buttons: [ buton1, buton2 ]});



};

module.exports.conf = {
  aliases: ["botdavet"],
  permLevel: 0,
  enabled: true,
  guildOnly: true//SentRise was here 
};

module.exports.help = {
  name: "davet",
  description: "",
  usage: ""
};