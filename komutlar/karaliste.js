const db = require('croxydb')
const { MessageButton } = require("discord-buttons");
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
   const kl = require('croxydb')

 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/QE7p8bt4Hk")
    .setEmoji("675426026117005355")


          const i = await kl.fetch(`kara_${message.channel.id}`); // \\
    if (i == 'kara') return message.reply("Malesef Sen Karalistedesin Ve Komutları Kullanamassın ")
 
  let nesne = args[0]
  if (!nesne) return message.channel.send("<a:srno:1015943126470361149> Bir kullanıcı ID'si belirtiniz.")
  
  db.set(`kara_${nesne}`, 'kara')


     const buttonDelete = new MessageButton().setStyle('grey').setLabel('Sil').setID('buttonDelete').setEmoji("963796133296078858")



 return message.channel.send("Belirttiğiniz ID'ye sahip kullanıcı karalisteye eklenmiştir.", {buttons: [buton1, buttonDelete]})

.then(async function(helpMessage) {

    helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

      if (button.id == 'buttonDelete') {

        message.delete().then(helpMessage.delete())

        button.reply.defer()

      }
})})

  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karaliste"],
  permLevel: 4
};
exports.help = {
  name: 'karalist',
  description: '[Admin Komutu]',
  usage: 'karaliste ID'
};