let limit = 30
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
   conn.sendBut(m.chat, `Tes`, 'tes', 'Hi' `.hi`, m, contextInfo: {
    externalAdReply: {
            title: '━━━━Tes━━━', 
            body: 'Now Playing...',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/76f08bd0aeb06c3e0c0d5.jpg')).buffer(),
         mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`
        }
     }
}
handler.command = /^(tes)$/i

module.exports = handler