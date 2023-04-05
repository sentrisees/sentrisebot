const { MessageButton } = require("discord-buttons");
const discord = require("discord.js");
exports.run = (client, message, args) => {//SentRise was here 


    
  var guild = message.guild;
  var banlayan = message.author.tag;
  let banxx = message.guild.fetchBans();
   var kisi = message.mentions.members.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]); 
     var sebeb = args.slice(1).join(" ");
    
    
     if (!message.member.hasPermission("BAN_MEMBERS")) {//SentRise was here 
        const yetkinyok = new discord.MessageEmbed()
          .setDescription("<a:srno:1015943126470361149>  Herhangi Bir Kişi Banlamak İçin `Üyeleri Engelle` İznine Sahip Olmalısın!")
          .setFooter("SentRise Pro - 2022")
          .setColor('#F9ADC9')
          return message.channel.send(yetkinyok)
     }


 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/QE7p8bt4Hk")
    .setEmoji("897425462354120704")//sfnjsdngdjkfkfnjdfhn
 

       
      if(!kisi) {
 const buttonDelete = new MessageButton().setStyle('grey').setLabel('Sil').setID('buttonDelete').setEmoji("1015015157937741874")



return message.channel.send('Bir kişi belirtmen gerekiyordu.', {buttons: [buton1, buttonDelete]})

.then(async function(helpMessage) {

    helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

      if (button.id == 'buttonDelete') {

        message.delete().then(helpMessage.delete())

        button.reply.defer()

      }
})})   


  }
      
    if(!message.author.id !== message.guild.ownerID) {  
  if(message.member.roles.highest.comparePositionTo(message.mentions.members.first().roles.highest) <= 1) {
    const rolsira = new discord.MessageEmbed()
    .setDescription("**<a:srno:1015943126470361149> Bu kişi senden yüksekte dikkat et o seni banlamasın.**")
    .setColor('#F9ADC9')
    return message.channel.send(rolsira) 
     }
    }


     if(kisi.id == message.guild.ownerID) {
        const arkadaşownermış = new discord.MessageEmbed()
   .setDescription("**<a:srno:1015943126470361149>  Bu Kişi Sunucu Sahibi Onu Banlayamazsın!**")
   .setColor('#F9ADC9')
   return message.channel.send(arkadaşownermış) 
      }
                    
          if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
       const yetkimyok = new discord.MessageEmbed()
       .setDescription("**<a:srno:1015943126470361149>  Herhangi Bir Kişi Banlamak İçin `Üyeleri Engelle` İznine Sahip Olmalıyım!**")
       .setColor('#F9ADC9')
       return message.channel.send(yetkimyok) //SentRise was here 
     }
          
      
          if(!kisi.bannable) {
      const notbannable = new discord.MessageEmbed()
 .setDescription("**<a:srno:1015943126470361149>  Bu Kişiyi yasaklayamam!**")
 .setColor('#F9ADC9')
 return message.channel.send(notbannable)
    }

          
          
         var now = new Date()
 var sebepp = null
 
 if(!sebeb) {
   sebepp = "Sebep Belirtilmemiş."//SentRise was here 
 }    
 if(sebeb) {
   sebepp = sebeb
 }   
         try {
           const sucembeddm = new discord.MessageEmbed()
           .setDescription(`<a:sryes:1015942756776026174>  ${kisi} **${guild}** Adlı Sunucudan Yasaklandın.` + "\r\n" + `**Sebep: ${sebepp}**`)
           .setColor('#F9ADC9')
          kisi.send(sucembeddm)
           const sucembed = new discord.MessageEmbed()
           .setDescription(`<a:sryes:1015942756776026174>  ${kisi} Adlı kullanıcı, **${sebepp}** Nedeni ile sunucudan yasaklanmıştır.`) //SentRise was here 
           .setColor('#F9ADC9')
          message.channel.send(sucembed)
          return guild.members.ban(kisi, { reason: sebepp });
        } catch (error) {
          message.reply("**<a:srno:1015943126470361149> Bir Hata İle Karşılaşıldı. Birkaç Dakika İçinde Tekrar Deneyin Eğer Bu Sorununuza Çözüm Olmadıysa Bir Geliştirici Veya Yetkiliye Bildirin!**")
          console.log(error)
        }  
          
          
          




}
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban"],//SentRise was here 
  permLevel: 0
};
exports.help = {
  name: "ban",
  description: "Belirttiğiniz Kişiyi Sunucudan Banlar",
  usage: "ban <Etiket> <Sebep Varsa Sebep>"
};