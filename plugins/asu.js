//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {

    let res = `https://api.zacros.my.id/asupan/${command}`
    
    conn.sendFile(m.chat, res, '', `Asupannya nih`, m)
}
handler.help = ['hijaber', 'ukhty', 'santuy', 'cecan', 'indonesia', 'malaysia', 'thailand', 'vietnam', 'china', 'korea', 'japan']
handler.tags = ['asupan']
handler.command = /^(hijaber|ukhty|santuy|cecan|Indonesia|malaysia|thailand|vietnam|china|korea|japan)$/i

handler.register = true

module.exports = handler
