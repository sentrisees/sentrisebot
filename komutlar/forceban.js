const Discord = require("discord.js"); 
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {


  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply(" <a:srno:1015943126470361149> Yetkiniz bu komut için yetmiyor.");
  let dcs_user = args[0];
  if (isNaN(dcs_user)) return message.reply(" <a:srno:1015943126470361149> Doğru ID girmelisiniz!");//SentRise was here 
  await message.guild.members.ban(dcs_user);



 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/QE7p8bt4Hk")



  return message.reply(`<a:sryes:1015942756776026174> \`${dcs_user}\` Sunucudan yasaklanmıştır.`,{buttons:[buton1]});
}; 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["forceban"]
};

exports.help = {
  name: "forceban",
  description: "ID ile Sunucudan Birisini Banlar!",//SentRise was here 
  usage: "forceban <kullanıcı-id>"
};