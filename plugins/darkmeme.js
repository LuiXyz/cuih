let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  m.reply('Sedang Diproses...')
  let url = `https://hardianto.xyz/api/darkmeme?apikey=hardianto`
  conn.sendFile(m.chat, url, 'lucu.jpg', `Dark ?`, m, false)
}
handler.help = ['darkmeme'].map(v => v + ' ')
handler.tags = ['internet', 'fun', 'meme']

handler.command = /^(darkmeme)$/i
handler.register = true

module.exports = handler
