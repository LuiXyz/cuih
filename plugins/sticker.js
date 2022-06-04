const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, usedPrefix, text }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No Image/video Found'
  let img = await q.download()
  let url = await uploadImage(img)  
try {
  conn.sendImageAsSticker(m.chat, url, m, { packname: "", author: "Recode by Lui" })
  } catch (e) {
    m.reply('gagal, coba gambar lain')
  }
}

handler.help = ['sticker','s','stiker']
handler.tags = ['sticker']
handler.command = /^(stiker|s|sticker)$/i
handler.limit = false
handler.group = false
handler.register = false
module.exports = handler