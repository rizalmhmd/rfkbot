let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
await m.reply(global.wait)
    let res = await (await fetch(`https://api.lolhuman.xyz/api/cuaca`)).json()
        let str = `*INFO CUACA*\n\nTempat : ${res.tempat}\nLatitude : ${res.latitude}\nLongitude : ${res.longitude}\nCuaca : ${res.cuaca}\nAngin : ${res.angin}\nDeskripsi : ${res.description}\nKelembapan : ${res.kelembapan}\nSuhu : ${res.suhu}\nUdara : ${res.udara}\nPermukaan Laut : ${res.permukaan_laut}`
    conn.sendButtonLoc(m.chat, 'infocuaca.jpg', str, footer, 'News', '#? news', m)
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
