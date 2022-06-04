const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
  let er = `contoh:
*${usedPrefix}emo(spasi)ap(spasi)❤️*
*${usedPrefix}emo ap ❤️*

┌〔 Opsi 〕
├ ap = apple
├ fa = facebook
├ go = google
├ ht = htc
├ lg
├ mi = microsoft
├ mo = mozilla
├ op = openmoji
├ pi = pixel
├ sa = samsung
├ tw = twitter
├ wh = whatsapp
└────

Hanya bisa 1 emoji, perhatikan spasi, jangan spam!

Mau bikin stiker bisa 2/3 emoji? klik http://wa.me/62851577296390?text=%23stikeremoji`
  if (!args[0]) throw er

  let template = (args[0] || '').toLowerCase()
  if (!args[1]) throw er
  if (/emo/i.test(command)) {
    try {
      switch (template) {
        case 'apple':
        case 'ip':
        case 'ap':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendImageAsSticker(m.chat, emoji.images[0].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
        case 'facebook':
        case 'fb':
        case 'fa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
               await conn.sendImageAsSticker(m.chat, emoji.images[6].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
        case 'google':
        case 'go':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendImageAsSticker(m.chat, emoji.images[1].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
        case 'htc':
        case 'ht':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
               await conn.sendImageAsSticker(m.chat, emoji.images[12].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
        case 'lg':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
await conn.sendImageAsSticker(m.chat, emoji.images[11].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
        case 'microsoft':
        case 'mc':
        case 'mi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
await conn.sendImageAsSticker(m.chat, emoji.images[3].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
        case 'mozilla':
        case 'moz':
        case 'mo':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
await conn.sendImageAsSticker(m.chat, emoji.images[13].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
        case 'openmoji':
        case 'omoji':
        case 'op':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendImageAsSticker(m.chat, emoji.images[8].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
        case 'pixel':
        case 'pi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendImageAsSticker(m.chat, emoji.images[7].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
        case 'samsung':
        case 'ss':
        case 'sa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendImageAsSticker(m.chat, emoji.images[2].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
        case 'twitter':
        case 'tw':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
await conn.sendImageAsSticker(m.chat, emoji.images[5].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
        case 'whatsapp':
        case 'wa':
        case 'wh':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              await conn.sendImageAsSticker(m.chat, emoji.images[4].url, m, { packname: global.packname, author: global.author, categories: res.tags })
            })
          break
      }
    } catch (e) {
      throw er
    }
  }
}
handler.help = ['semoji']
handler.tags = ['sticker']
handler.command = /^((s(tic?ker)?)?emo(ji)?)$/i

module.exports = handler
