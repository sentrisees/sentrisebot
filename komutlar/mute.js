const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");
const db = require("quick.db");
const client = new Discord.Client();//SentRise was here 
const ms = require("ms");
exports.run = async (client, message, args) => {
  function hata(mesaj) {


 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/QE7p8bt4Hk")


    let embed = new Discord.MessageEmbed()
      .setTitle("Uyarı")
      .setColor("#00ff00")
      .setDescription(mesaj)
      .setFooter(
        client.user.username + " |  Mute Sistemi",//SentRise was here 
        client.user.avatarURL()
      );
let msg = message.channel.send({embed: embed , buttons: [ buton1 ]});

    return message.channel
      .then(snt => snt.delete({ timeout: 11000 }));
  }

  if (!message.member.permissions.has("ADMINISTRATOR"))
    return hata(
      "<a:srno:1015943126470361149> Bir kullanıcıyı susturmak için **ADMINISTRATOR** yetkisine sahip olmalısınız."
    );



  let user =
    message.mentions.users.first() ||
    client.users.cache.get(args[0]) ||
    message.guild.members.cache.find(user => user.user.username === args[0]);//SentRise was here 
  let süre = args[1];
  let sebep = args.slice(2).join(" ");



  if (!user || user.bot)
    return hata(
      " <a:srno:1015943126470361149> Mutelenmesini istediğin kullanıcıyı belirtmelisin. Örnek kullanım: **s!mute @lutex 1saat Spam**"
    );
  if (!süre)
    return hata(
      "<a:srno:1015943126470361149> Kullanıcının ne kadar muteli kalmasını istediğini belirtmelisin. Örnek kullanım: **" +
        process.env.prefix +
        "sustur @lutex 1saat Spam**"
    );
  if (!sebep) sebep = "<a:srno:1015943126470361149> Bir neden girilmedi!";




  let ms_süre;
  let dsüre;
  let eksüre;

  if (süre.includes("saniye")) {//SentRise was here 
    dsüre = dsüre = "s";
    eksüre = "saniye";
  }

  if (süre.includes("dakika")) {
    dsüre = dsüre = "m";
    eksüre = "dakika";
  }

  if (süre.includes("saat")) {
    dsüre = dsüre = "h";
    eksüre = "saat";
  }

  if (süre.includes("gün")) {
    dsüre = dsüre = "d";
    eksüre = "gün";
  }

  if (!dsüre)
    return hata(
      "<a:srno:1015943126470361149>  Belirttiğin zaman biçimi hatalı! **saniye, dakika, saat, gün**"//SentRise was here 
    );

  ms_süre = süre.replace(eksüre, "");

  if (isNaN(ms_süre) || ms_süre < 1)
    return hata(
      "<a:srno:1015943126470361149> Belirttiğin zaman biçimi hatalı! **1saniye, 1dakika, 1saat, 1gün**"
    );

  ms_süre = ms(ms_süre + dsüre);

  let mute_rol = message.guild.roles.cache.find(
    rol =>
      rol.name.toLowerCase().includes("susturuldu") ||//SentRise was here 
      rol.name.toLowerCase().includes("muted")
  );

  if (!mute_rol) {
    message.guild.roles
      .create({
        data: {
          name: "Susturuldu"
        }
      })
      .then(rol => {
        rol.setPermissions(0);
        message.guild.channels.cache.forEach(kanal => {
          kanal.updateOverwrite(rol, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
          });
        });
      });
  }

  let mute_rol2 = message.guild.roles.cache.find(
    rol =>
      rol.name.toLowerCase().includes("susturuldu") ||
      rol.name.toLowerCase().includes("muted")
  );
  if (mute_rol2) {
    let member = message.guild.members.cache.get(user.id);

    if (member.roles.cache.has(mute_rol))
      return hata("<a:srno:1015943126470361149> Bu kullanıcı zaten bir muteye sahip!");//SentRise was here 

    const moment = require("moment");
    moment.locale("tr");

    let tamam = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("<a:sryes:1015942756776026174>  Kullanıcı Susturuldu!")
      .setDescription(
        "**" +
          user.username +
          "** Adlı kullanıcıyı; **" +
          moment(Date.now() - ms_süre).format("LLLL") +//SentRise was here 
          "** Tarihine kadar; **" +
          sebep +
          "** Nedeniyle susturdum!"
      )
      .setColor("#00ff00");
    message.channel.send(tamam);

    member.roles.add(mute_rol);
    db.set(`mute_${user.id}`, {
      kanal: message.channel.id,
      ms: ms_süre,
      başlangıç: Date.now(),
      sebep: sebep,
      moderator: message.author.id,
      sunucu: message.guild.id
    });
  } else {
    return message.channel.send(
      "<a:srno:1015943126470361149> Komutu tekrar kullanın. Sunucuda **Susturuldu** rolünü açtım! Eğer rol gelmediyse; gerekli yetkilere sahip olduğuma emin olun."//SentRise was here 
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sustur"],//SentRise was here 
  permLevel: 0
};

exports.help = {
  name: "mute",
  description: "",
  usage: "mute"
};
