const ayarlar = require("../ayarlar.json");
const db = require('croxydb')
const discord = require("discord.js");

module.exports = async message => {
  let client = message.client;//SentRise was here 
  let prefix =
    (await require("croxydb").fetch(`prefix_${message.guild.id}`)) ||
    ayarlar.prefix;
  if (message.author.bot) return;//SentRise was here 
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message); //SentRise was here 
  let cmd;
 
  if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else {
        const embed = new discord.MessageEmbed()
.setDescription("Böyle bir komut yok nerelere geldin şen <:agla:1015927650285518878> **s!yardım**")
      .setColor("RED")
       message.channel.send(embed)
    }
  }
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }//SentRise was here 
  if (cmd) {
const data = db.fetch(`kara_${message.author.id}`); // \\
    if (data == 'kara') return message.reply("Karalişteye eklenmişsin gülüm geçmiş olşun <:agla:1015927650285518878> ")
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};
//SentRise was here 