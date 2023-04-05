const Discord = require('discord.js');
const { MessageButton } = require("discord-buttons");
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {//SentRise was here 
 

  if (!message.member.hasPermission("MANAGE MESSAGES")) return message.channel.send(` :srno: Bu komutu kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısın`);
    const x = args[0];
 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/QE7p8bt4Hk")
    .setEmoji("675426026117005355")


     const buttonDelete = new MessageButton().setStyle('grey').setLabel('Sil').setID('buttonDelete').setEmoji("1014596292158161048")



if(isNaN(x) || x > 500) return message.channel.send('**Mesaj silmek için bir sayı belirtmeniz gerekiyor!**', {buttons: [buton1, buttonDelete]})

.then(async function(helpMessage) {

    helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

      if (button.id == 'buttonDelete') {

        message.delete().then(helpMessage.delete())

        button.reply.defer()

      }
})})
    message.channel.bulkDelete(x).catch(err => console.log(err));
    message.delete({timeout: 0});

 var embed = new Discord.MessageEmbed()
 .setDescription(`<@${message.author.id}> <a:sryes:1015942756776026174> ${x} Adet mesaj silinmiştir.`)
 .setColor("GREEN");
let msg = message.channel.send({embed: embed , buttons: [buton1]});//heh oydu 
 


                            

 
  
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["sil"],
 permLevel: 0//SentRise was here 
};

exports.help = {
 name: 'sil',
 description: 'Ban limiti.',
 usage: 'members.banlimit',
 kategori: 'yetkili'
};