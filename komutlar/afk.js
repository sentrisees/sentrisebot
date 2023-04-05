const db = require("croxydb");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;
const { MessageButton } = require('discord-buttons')
exports.run = function(client, message, args) {
const buttonDelete = new MessageButton().setStyle('grey').setLabel('Sil').setID('buttonDelete').setEmoji("1017910338743705701")
if (!message.guild.me.permissions.has("MANAGE_NICKNAMES")) return message.channel.send(`İsimleri değiştir yetkim olmadan nasıl afk tagı verebilirim?`)
    
  var kullanıcı = message.author;
  let afkmı = db.fetch(`afk_${kullanıcı.id}`)
  

  let tag = db.fetch(`afktag.${message.guild.id}`) || "Belirtilmemiş"
  let tag2 = db.fetch(`afktag.${message.guild.id}`) || " "
                const disbut = require('discord-buttons')
  let button3 = new disbut.MessageButton()
    .setStyle("url")
    .setURL("https://discord.gg/QE7p8bt4Hk")
    .setLabel("Destek Sunucusu")
    .setEmoji("1012368028366811146");
                  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
                    
       const disbut222 = require('discord-buttons')
       if(karaliste) {
  let button3 = new disbut222.MessageButton()
    .setStyle("url")
    .setURL("https://discord.gg/QE7p8bt4Hk")
    .setLabel("Destek Sunucusu")
    .setEmoji("1012368028366811146");
  message.react("<:carpi2:1014253669979525152>")
                    
     
 const fyneximbne = new Discord.MessageEmbed()
 .setColor("GREEN")
 .setDescription(`**${karaliste}** sebebiyle **kara listeye** eklenmişsiniz **Fynex**'in komutlarını kullanamazsınız.'`);
  
  
    return message.channel.send(fyneximbne).then((msg) => msg.delete({ timeout: 5000 })); }
   if (!message.guild) {
      let button32 = new disbut222.MessageButton()
    .setStyle("url")
    .setURL("https://discord.gg/QE7p8bt4Hk")
    .setLabel("Destek Sunucusu")
    .setEmoji("1012368028366811146");
  const ozelmesajuyari = new Discord.MessageEmbed()
.setColor("GREEN")
  .setDescription("Bu komutu sâdece sunucularda kullanabilirsiniz.")
  return message.author.send(ozelmesajuyari, button32); }
  
  var Sebep = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`Afk sebebini giriniz! (**f!afk <sebep>**)\n\n <:ayarlar:1012720817232150670> Afk Tagı: ${tag} (f!afk-tag <tag>)`)
  if(!Sebep) return message.reply(embed)
  db.set(`afk_${kullanıcı.id}`, Sebep);
  db.set(`afk_${kullanıcı.id}.sebep`, Sebep);
  db.set(`afk_süre_${kullanıcı.id}`, Date.now());
  db.set(`afkkullanıcı.${message.guild.id}`, message.author.tag)
  db.set(`afkkullanıcı2.${message.guild.id}`, Sebep)
  message.guild.members.cache.get(message.author.id).setNickname(`${tag2} | ${message.author.username}`);
  const afk = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`${tag2} **AFK** sebebin **${Sebep}** olarak ayarlandı.`)
  message.channel.send(afk, {buttons: [buttonDelete]}).then(async function(helpMessage) {

    helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

      if (button.id == 'buttonDelete') {

        message.delete().then(helpMessage.delete())

        button.reply.defer()

      }
})})

};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  description: 'afk komutu',
  usage: 'afk'
};