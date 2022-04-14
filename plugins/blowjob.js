let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
   heum = await fetch(`https://api.xteam.xyz/randomimage/blowjob?apikey=9db5a5373433c015`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '🔥🥵🥵', 'ROZZxBOTZ', 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['blowjob']
handler.tags = ['hentai']

handler.command = /^(blowjob)$/i

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

