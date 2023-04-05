const Discord = require('discord.js');
const { stripIndents } = require('common-tags');//SentRise was here 

exports.run = (client, msg, args) => {//SentRise was here 


let x;
    let x2;
    let x3;//SentRise was here 
    let x4;
    let x5;
    let x6;
    let x7;//SentRise was here 
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = "<a:sryes:1015942756776026174>"
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<a:srno:1015943126470361149> "
    
    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:sryes:1015942756776026174>"//SentRise was here 
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:srno:1015943126470361149> "
    
    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:sryes:1015942756776026174>"//SentRise was here 
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:srno:1015943126470361149> "
    
    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:sryes:1015942756776026174>"
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:srno:1015943126470361149> "
    
    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:sryes:1015942756776026174>"
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:srno:1015943126470361149> "
    
    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:sryes:1015942756776026174>"
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:srno:1015943126470361149> "//SentRise was here 
    
    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:sryes:1015942756776026174>"
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:srno:1015943126470361149> "
    
    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:sryes:1015942756776026174>"
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:srno:1015943126470361149> "
    
    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:sryes:1015942756776026174>"//SentRise was here 
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:srno:1015943126470361149> "
    
    //emojileri yönet
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:sryes:1015942756776026174>"
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:srno:1015943126470361149> "
    
    //webhookları yönet
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:sryes:1015942756776026174>"
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:srno:1015943126470361149> "
     const embed = new Discord.MessageEmbed()
  .setColor('GREEN')
.setTitle ('Yetkilerin şimdilik bunlar;')
.setFooter('SentRise Yönetim | 2022')
    .setDescription(` ${x} Yönetici \n${x2} Denetim Kaydını Görüntüle\n ${x3} Sunucuyu Yönet \n${x4} Rolleri Yönet \n${x5} Kanalları Yönet \n${x6} Üyeleri At \n${x7} Üyeleri Yasakla \n${x8} Mesajları Yönet \n${x9} Kullanıcı Adlarını Yönet \n${x10} Emojileri Yönet \n${x11} Webhook'ları Yönet`);
 msg.channel.send(embed);

  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilerim'],//SentRise was here 
  permLevel: 0,
    kategori: "kullanıcı"//SentRise was here 
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'//SentRise was here 
};