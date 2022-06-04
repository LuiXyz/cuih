let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('tunggu...')
  let res = await (await fetch('https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/shota.json')).json()
  let cosser = res[Math.floor(Math.random() * res.length)]
  await conn.sendButtonImg(m.chat, cosser, 'Adik gw nih 😳', 'By Lui', 'Next', `.shouta`, m, false)
}
handler.help = ['shouta']
handler.tags = ['anime']
handler.command = /^(shouta)$/i

module.exports = handler