let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
if (!args[0]) throw 'Uhm..url nya mana?'
let res = await fetch(`https://melcanz.com/xnxxdl?url=${args[0]}&apikey=mAegnBTN`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { info, title, link, } = json.result
await m.replay(m.chat, `
𝙉𝙖𝙢𝙖 : *${info}*
𝘾𝙖𝙥𝙩𝙞𝙤𝙣 : *${caption}*
𝙇𝙞𝙣𝙠 : ${link}
`.trim(), m)
}

handler.help = ['xnxxdl <url>']
handler.tags = ['bokep']
handler.command = /^xnxxdl$/i
handler.register = true
handler.limit = true

module.exports = handler
