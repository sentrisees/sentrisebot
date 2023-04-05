const Discord = require("discord.js");
const moment = require("moment")
require('moment-duration-format');//SentRise was here 

exports.run = async(client, message, args) => {//SentRise was here 

  if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;

  var user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author; message.author;
  const member = message.guild.member(user)
  let kisi = client.users.cache.get(member.id);//SentRise was here 

moment.locale('tr-TR');
      var userRoles//SentRise was here 
        if (member.roles.size > 1) {
            userRoles = `${member.roles.array().sort((a, b) => a.comparePositionTo(b)).slice(1).reverse().map(role => `**\`${role.name}\`**`)}`
          } else {
            userRoles = '`Bulunmuyor`'
              }
              
  function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " önce";//SentRise was here 
        };

  if (!member) return message.reply('Bir kullanıcı belirt g!profil @Gnarge veya g!profil <Kullanıcı_ID> ')//SentRise was here 

        let serverSize = message.guild.memberCount;

  const embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL() || user.defaultavatarURL())
      .setThumbnail(user.avatarURL() || user.defaultavatarURL())
      .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
      .addField('<a:sryes:1015942756776026174> Üye bilgisi: <a:sryes:1015942756776026174> \n',`Kullanıcı İsmi: ${member.displayName}\nKatılım Tarihi: ${moment.utc(member.joinedAt).format('Do MMMM YYYY')} - ${checkDays(member.joinedAt)} \n\nRolleri:\n ${member.roles.cache.sort((b, a) => { return a.position - b.position }).map(role => `${role}\n`).join(" - ")}`, false)        .addField('<a:yesil:903660396618072136> Kullanıcı bilgisi: <a:yesil:903660396618072136> ',  `\nTag: ${member.user.tag}\nID: ${member.user.id}\nKuruluş Tarihi: ${moment.utc(user.createdAt).format('Do MMMM YYYY')} - ${checkDays(user.createdAt)}`, false)
      .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
      .setTimestamp()
     return message.channel.send(embed)
                                
        }

exports.conf = {
  aliases: ['profilim','kullanıcıbilgi','profil','kullanıcı bilgi','kb','user'],//SentRise was here 
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'kullanıcı-bilgi',//SentRise was here 
  description: 'Kullanıcı hakkında bilgi verir.',
  usage: 'kullanıcı-bilgi @Kullanıcı',

};