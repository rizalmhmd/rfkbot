let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
conn.sendFile(m.chat, 'https://zenzapi.xyz/downloader/tikporn?apikey=sanzychan01', 'asupan.mp4', 'Nih Jngn comly  ya', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['ttporn']
handler.tags = ['bokep']

handler.command = /^(ttporn)$/i
handler.premium = false
handler.register = true
handler.limit = true
module.exports = handler
