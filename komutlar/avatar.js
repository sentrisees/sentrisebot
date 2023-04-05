const Discord = require(`discord.js`)

exports.run = async(client, message)=> {
  
  let user = message.mentions.users.first() || message.author//SentRise was here 
  if(user){
    
const embed = new Discord.MessageEmbed()
 .setDescription(`waooow <:3259scrocket:1011662490771398676> `)
.setImage(user.displayAvatarURL({dynamic:true})) 
.setTimestamp()
.setColor(`BLUE`)
.setFooter(`SentRise`)
message.channel.send(embed)
 } else {
  const embed = new Discord.MessageEmbed()
  .setDescription(`waooow <:3259scrocket:1011662490771398676> `)
.setImage(message.author.avatarURL({dynamic:true}))//SentRise was here 
.setTimestamp()
  .setColor(`BLUE`)
.setFooter(`SentRise`)
message.channel.send(embed)
 }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["avatar","avatarım"],
    permLevel: 0
}

exports.help = {
    name: 'pp',

}