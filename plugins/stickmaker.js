const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const effects = ['jail', 'gay', 'glass', 'wasted', 'triggered']

let handler = async(m, { conn, usedPrefix, text }) => {
        let effect = text.trim().toLowerCase()
        if (!effects.includes(effect)) throw `
*Usage:* ${usedPrefix}stickmaker <effectname>
*Example:* ${usedPrefix}stickmaker jail
*List Effect:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No Image Found'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} not support`
  let img = await q.download()
  let url = await uploadImage(img)
  let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
    avatar: url
  })
try {
  conn.sendImageAsSticker(m.chat, apiUrl, m, { packname: "", author: "Recode by Lui" })
  } catch (e) {
    m.reply('gagal, coba gambar lain')
  }
}

handler.help = ['stickmaker (caption|reply img)']
handler.tags = ['sticker']
handler.command = /^(stickmaker|smaker)$/i
handler.limit = false
handler.group = false
handler.register = false
module.exports = handler
