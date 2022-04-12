let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. urlnya mana?\n\npenggunaan:\n${usedPrefix + command} url\ncontoh:\n${usedPrefix + command} https://youtube.com/shorts/lBQb1rvY9ao`
    let res = await fetch(API('lol', '/api/ytreels', apikey, {url : text},'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    await m.reply(wait)
    await conn.sendFile(m.chat, json.result.link, json.result.title, wm, m)
}
handler.help = ['ytstory'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ytstory|yts2)$/i

handler.limit = false

module.exports = handler
