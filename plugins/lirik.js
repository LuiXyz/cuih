//by AsuKidal
//Thanks to farhan

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai teks \n\nContoh : ${usedPrefix + command} pamungkas`
    let res = await fetch(`https://api-xcoders.xyz/api/search/liriklagu?query=${text}&apikey=xcoders`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendButtonImg(m.chat, json.result.thumb, `*${json.result.title}*\n_${json.result.lyrics}_`, `${json.result.url}`, 'Ok', `ok`, m)
    
}
handler.help = ['lirik', 'lyrics']
handler.tags = ['internet']
handler.command = /^(l(irik|yrics))$/i

handler.register = true
handler.limit = true

module.exports = handler