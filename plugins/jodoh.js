const fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `contoh:\n${usedPrefix + command} ariffb|${conn.getName(m.sender)}`
    let [nama1, nama2] = text.split(/[&|.]/i)
    if (!nama1 || !nama2) throw `contoh:\n${usedPrefix + command} kanna|${conn.getName(m.sender)}`

    let res = await fetch(global.API('zekais', '/cekjodoh', { nama, pasangan }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let { positif, negatif } = json.result
    let caption = `
*Nama kamu:* ${json.result.nama1}
*Nama doi:* ${json.result.nama2}

*Positif:*
${positif}

*Negatif:*
${negatif}
`.trim()
    m.reply(`${caption})
}
handler.help = ['jodoh'].map(v => v + ' <nama>|<nama doi>')
handler.tags = ['fun']
handler.command = /^(jodoh)$/i

handler.limit = true

module.exports = handler