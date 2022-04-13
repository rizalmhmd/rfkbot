let fetch = require('node-fetch')

let timeout = 120000
let poin = 5000
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0])
        throw false
    }
    if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/games/tebakbendera.json'))).json()
    let json = src[Math.floor(Math.random() * src.length)]
    if (!json) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}benderaapa untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakbendera[id] = [
         await conn.sendButtonImg(m.chat, await (await fetch(json.img)).buffer(), caption, footer, 'Bantuan', '.benderaapa', m)
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, footer, 'Tebak Bendera', '.tebakbendera', conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i

module.exports = handler
