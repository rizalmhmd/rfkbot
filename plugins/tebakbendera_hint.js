let handler = async (m, { conn }) => {
    conn.tebakgambar = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (!(id in conn.tebakbendera)) throw false
    let json = conn.tebakbendera[id][1]
    conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/g, '_') + '```\nBalas gambarnya, bukan pesan ini', conn.tebakbendera[id][0])
}
handler.command = /^benderaapa$/i

module.exports = handler
