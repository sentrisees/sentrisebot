const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('croxydb')

exports.run = async (client, message, args) => {


if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Yetkin yok.:x:`)

if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('#f6ff00').setTitle('Yanlış Kullanım!').setDescription('<:909015484786171924:916716241589268510>  s!uyarı ekle @lutex\n <:909015484786171924:916716241589268510>  s!uyarı sil @lutex <uyarısayısı>'))


if(args[0] === 'ekle') {//SentRise was here 

let kullanıcı = message.mentions.users.first()

if(!args[1]) return message.channel.send(`<a:srno:1015943126470361149> Bir kişiyi etiketlemelisin.`)

if(kullanıcı.id === message.author.id) return message.channel.send(`<a:srno:1015943126470361149> Kendini uyaramazsın.`)//SentRise was here 

let reason = args.slice(2).join(' ')

db.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)

const sayı = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
//SentRise was here 
if(!reason) {

await message.channel.send(new Discord.MessageEmbed()

    .setColor('#f6ff00')

    .setTitle('Başarılı')//SentRise was here

    .setDescription(`<a:sryes:1015942756776026174> ${kullanıcı} uyarıldı. Toplam uyarıları: **${sayı}**`)
    .setFooter(`Sentrise Uyarı Sistemi`))

await kullanıcı.send(new Discord.MessageEmbed()

    .setColor('#f6ff00')

    .setTitle('Hey Dikkat et')

    .setDescription(`<a:srno:1015943126470361149> ${message.guild.name} sunucusunda uyarıldın. Toplam uyarıların: **${sayı}**`)
    .setFooter(`Sentrise Uyarı Sistemi`)) 

return}

if(reason) {

await message.channel.send(new Discord.MessageEmbed()//SentRise was here

    .setColor('#f6ff00')

    .setTitle('Başarılı')

    .setDescription(`<a:sryes:1015942756776026174> ${kullanıcı} uyarıldı. Toplam uyarıları: **${sayı}**\nSebep: ${reason}`)
    .setFooter(`Sentrise Uyarı Sistemi`))

await kullanıcı.send(new Discord.MessageEmbed()//SentRise was here

    .setColor('#f6ff00')

    .setTitle('Hey Dikkatli ol')

    .setDescription(`<a:sryes:1015942756776026174> ${message.guild.name} **sunucusunda** **\`${reason}\`** **Sebebiyle Uyarıldın.** \n**Toplam Uyarıların:** **\`${sayı}\`**`)
    .setFooter(`Sentrise Uyarı Sistemi`)) 

return} }

if(args[0] === 'sil') {

let kullanıcı = message.mentions.users.first()

if(!args[1]) return message.channel.send(`<a:srno:1015943126470361149> Bir kişiyi etiketlemelisin.`)//SentRise was here

if(kullanıcı.id === message.author.id) return message.channel.send(`Kendini uyaramazsın.`)

let sayı = args[2]

if(!sayı) return message.channel.send(`<a:srno:1015943126470361149> Silinecek uyarı sayısını yazmadın!`)

if(sayı === '0') return message.channel.send(`0 geçerli bir değer değildir.`)

const sayı2 = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(sayı2 < sayı) return message.channel.send(new Discord.MessageEmbed()//SentRise was here

    .setColor('#f6ff00')

    .setTitle('Dikkat')

    .setDescription(`<a:srno:1015943126470361149> ${kullanıcı}'nın uyarı sayısı: **${sayı2}**.Bundan daha fazla uyarı silemessin.`)
    .setFooter(`Sentrise Uyarı Sistemi`))

db.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, -sayı)

const sayı3 = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)//SentRise was here

await message.channel.send(new Discord.MessageEmbed()

    .setColor('#f6ff00')

    .setTitle('Başarılı')

    .setDescription(`<a:sryes:1015942756776026174> ${kullanıcı}'nın uyarısı silindi!\nToplam uyarı sayısı: **${sayı3 ? sayı3 : '0'}** `)
    .setFooter(`Sentrise Uyarı Sistemi`))

await kullanıcı.send(new Discord.MessageEmbed()//SentRise was here

    .setColor('#f6ff00')

    .setTitle('Hey Dikkat Et')

    .setDescription(`<a:sryes:1015942756776026174> ${message.guild.name} sunucusunda uyarın silindi bundan sonra daha dikkatli olmalısın.`)
    .setFooter(`Sentrise Uyarı Sistemi`)) }

if(args[0] === 'say') {

let kullanıcı = message.mentions.users.first()

if(!args[1]) return message.channel.send(`<a:srno:1015943126470361149> Bir kişiyi etiketlemelisin.`)


const sayı2 = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!sayı2) return message.channel.send(new Discord.MessageEmbed()//SentRise was here

    .setColor('#f6ff00')

    .setTitle('Bir Sorun Var')

    .setDescription(`<a:srno:1015943126470361149> ${kullanıcı}'nın hiç uyarısı bulunamadı.`)
    .setFooter(`Sentrise Uyarı Sistemi`))
  

await message.channel.send(new Discord.MessageEmbed()//SentRise was here

    .setColor('#f6ff00')

    .setTitle('Başarılı')

    .setDescription(`<a:sryes:1015942756776026174> ${kullanıcı}:\nToplam uyarı sayısı: **${sayı2 ? sayı2 : '0'}** `))
    .setFooter(`Sentrise Uyarı Sistemi`)}
    
};
exports.conf = {

enabled: true,

guildOnly: false,//SentRise was here

aliases: [],

permLevel: 0,

}

exports.help = {

name: 'uyarı',

description: 'Uyarı sistemi',

usage: 'uyarı ekle uyarı sil uyarı say',//SentRise was here

}