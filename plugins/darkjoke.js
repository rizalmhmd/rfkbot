let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), 'Dark Jokes', 'NEXT', '.darkjokes', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler
