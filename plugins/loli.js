
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('tunggu...')
  let res = await (await fetch('https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/loli.json')).json()
  let anjime = res[Math.floor(Math.random() * res.length)]
  await conn.sendButtonImg(m.chat, anjime, 'adik saya nih', 'By Lui', 'Lagi', `.loli`, m, false)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

module.exports = handler
