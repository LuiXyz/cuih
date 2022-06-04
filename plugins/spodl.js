//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
    if (!text) throw `Masukan link dari spotfiy !`
let handler = async(m, { conn, usedPrefix, text, command }) => {
    let res = await fetch(`https://zekais-api.herokuapp.com/spotifydl?url=${text}&apikey=5zsP4LAM`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
   conn.sendFile(m.chat, json.result, 'spo.mp3', ``, ``, m)
}

handler.help = ['spotifydl *link*']
handler.tags = ['downloader']
handler.command = /^(spotifydl)$/i

handler.limit = true

module.exports = handler