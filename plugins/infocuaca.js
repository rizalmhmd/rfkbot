let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
await m.reply(global.wait)
    let res = await (await fetch(`https://zahirr-web.herokuapp.com/api/infocuaca`)).json()
        let str = `*INFO CUACA*\n\nTittle : ${res.tittle}\nKelembapan : ${res.kelembapan}\nSuhu : ${res.suhu}`
    conn.sendButtonLoc(m.chat, await (await fetch(res.map)).buffer(), str, footer, 'News', '#? news', m)
}
handler.help = ['infocuaca']
handler.tags = ['news']
handler.command = /^(infocuaca)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
