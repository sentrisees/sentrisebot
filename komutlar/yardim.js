const categorylist = require("fs").readdirSync("./komutlar/").filter(s => s !== "private");
  for (const category of categorylist) {
const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');


exports.run = async (client, message, args) => {

  const kayıt2 = new MessageButton().setStyle('red').setEmoji('1069604301116284998').setLabel('Eğlence').setID('4')
const kayıt3 = new MessageButton().setStyle('grey').setLabel('Şu an Eğlence sayfasındasınız.').setID('5').setDisabled(true);
console.log("Yardım Kullanıldı! ", message.author.tag)
  let embed = new Discord.MessageEmbed()
  .setAuthor(`${client.user.username}`, client.user.avatarURL())
  .setColor('PURPLE')
.setTitle("<a:loading:1016003439450411088> SentRise Bot | Yardım menüsüne hoş geldin.")
  .setDescription(`<:2021_Snowsgiving_Emojis_001_Tree:921760128598962176> [Destek Sunucum](https://discord.gg/QE7p8bt4Hk)\n<:2021_Snowsgiving_Emojis_001_Tree:921760128598962176> [Beni sunucuna ekle](https://discord.com/api/oauth2/authorize?client_id=1015909809771515974&permissions=8&scope=applications.commands%20bot)\n-------------------\n:orange_book: Yetkili\n:green_book: Eğlence\n:closed_book: Bot`)
  .setThumbnail(message.author.avatarURL())
  .setImage("")
  message.reply(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Ana Menü').setEmoji('1011662364954869790').setID('1'), new MessageButton().setStyle('grey').setLabel('Yetkili').setEmoji('1069604297349804123').setID('2'), new MessageButton().setStyle('green').setEmoji('1069604297349804123').setLabel('Bot').setEmoji('1069604299241443451').setID('3'),  kayıt2]}).then(async function(helpMessage) {

    helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {



      if (button.id == '73') {
message.delete()
        message.delete().then(helpMessage.delete())

        button.reply.defer()

      }



        if (button.id == '1') {

        embed.setColor('PURPLE')
         embed.setTitle("<a:loading:1016003439450411088> SentRise Bot | Yardım menüsüne hoş geldin.")
          embed.setDescription(`<:2021_Snowsgiving_Emojis_001_Tree:921760128598962176> [Destek Sunucum](https://discord.gg/QE7p8bt4Hk)\n<:2021_Snowsgiving_Emojis_001_Tree:921760128598962176> [Beni sunucuna ekle](https://discord.com/api/oauth2/authorize?client_id=1015909809771515974&permissions=8&scope=applications.commands%20bot)\n-------------------\n:orange_book: Yetkili\n:green_book: Eğlence\n:closed_book: Bot`)
  embed.setThumbnail(message.author.avatarURL())
  embed.setImage("")
  
  
 
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('grey').setLabel('Şuan Ana menüdesiniz.').setID('1').setDisabled(true), new MessageButton().setStyle('grey').setLabel('Yetkili').setEmoji('1069604297349804123').setID('2'), new MessageButton().setEmoji('1069604297349804123').setStyle('green').setLabel('Bot').setEmoji('1069604299241443451').setID('3'),  kayıt2]})

        button.reply.defer()

      } else if (button.id == '2') {
        embed.setColor(`#F9ADC9`)
        embed.setTitle('Yetkili (Moderasyon) Komutları')
        embed.setDescription(`<:icons_discordstaff:1043898931584700458> s!ban - __Belirttiğiniz kişiyi yasaklar.__\n<:icons_discordstaff:1043898931584700458> s!kick - __Belirttiğiniz kişiyi sunucudan atar.__\n<:icons_discordstaff:1043898931584700458> s!mute - __Belirttiğiniz kişiyi susturur.__\n<:icons_discordstaff:1043898931584700458> s!sil - __Belirttiğiniz miktarda mesaj siler.__\n<:icons_discordstaff:1043898931584700458> s!lock - __Kanalı kilitler.__\n<:icons_discordstaff:1043898931584700458> s!güvenlik - __Belirttiğiniz kanala güvenlik mesajı atar.__\n<:icons_discordstaff:1043898931584700458> s!güvenlik-sıfırla - __Güvenlik log sıfırlar.__\n<:icons_discordstaff:1043898931584700458> s!unlock - __Kanal kiliti kaldırır.__\n<:icons_discordstaff:1043898931584700458> s!unban - __Yasaklı kişinin yasağını kaldırır.__\n<:icons_discordstaff:1043898931584700458> s!uyarı - __Belirttiğiniz kişiyi uyarır.__\n<:icons_discordstaff:1043898931584700458> s!forceban - __Belirttiğiniz kişiye ID ban atar.__\n`)
       embed.setFooter('SentRise - Lutex Software ')

        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Ana Menü').setEmoji('1011662364954869790').setID('1'), new MessageButton().setStyle('grey').setLabel('Şu an Yetkili sayfasındasınız.').setID('2').setDisabled(true), new MessageButton().setStyle('green').setLabel('Bot').setEmoji('1069604299241443451').setID('3'),  kayıt2]})

        button.reply.defer()

      } else if (button.id == '3') {

        embed.setTitle('Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.')
        embed.setColor('#F9ADC9')
        embed.setDescription(`<:icon_star_2:1043898526666596433> s!avatar - __Avatar gösterir.__\n<:icon_star_2:1043898526666596433> s!user - __Kullanıcı bilgilerini verir.__\n<:icon_star_2:1043898526666596433> s!sb - __Sunucu bilgilerini gösterir.__\n<:icon_star_2:1043898526666596433> s!botbilgi - __Bot hakkında bilgi verir.__\n<:icon_star_2:1043898526666596433> s!yetklierim - __Yetkilerini kontrol eder.__\n<:icon_star_2:1043898526666596433> s!ping - __Botun pingini gösterir.__`)
 
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Ana Menü').setEmoji('1011662364954869790').setID('1'), new MessageButton().setStyle('grey').setLabel('Yetkili').setEmoji('1069604297349804123').setID('2'), new MessageButton().setStyle('grey').setLabel('Şu an Bot sayfasındasınız.').setID('3').setDisabled(true),  kayıt2]})

        button.reply.defer()
  
      } else if (button.id == '4') {

        embed.setTitle('Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.')
        embed.setColor('#F9ADC9')
        embed.setDescription(`<:sagok:1031156519154225232> s!atasözü - __Atasözü söyler.__\n<:sagok:1031156519154225232> s!ara155 - __Polisi ararsınız :D__\n<:sagok:1031156519154225232> s!balıktut - __Balık tutar işte.__\n<:sagok:1031156519154225232> s!kartopu - __Kartopu atmaya ne dersin?__\n<:sagok:1031156519154225232> s!tokat - __İstedğiniz kişiye tokat atar.__\n<:sagok:1031156519154225232> s!şekerye - __Afiyetle şeker yersiniz :D__\n`)
         embed.setFooter('SentRise - Lutex Software')
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Ana Menü').setEmoji('1011662364954869790').setID('1'), new MessageButton().setStyle('grey').setLabel('Yetkili').setEmoji('1069604297349804123').setID('2'), new MessageButton().setStyle('green').setLabel('Bot').setEmoji('1069604299241443451').setID('3'), kayıt3]})

        button.reply.defer()
      }
    });
  });
};
}

exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['help', 'komutlar', 'yardim', "yardım", "<@1015909809771515974>", "sentrise"],
  permlevel: 0
}
exports.help = {
  name: 'yardım',
  description: 'Kayıt Olunca Alınacak Rolü Ayarlar',
  usage: 'alınacak-rol @rol'
}