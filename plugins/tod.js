let fetch = require('node-fetch')

let handler = async (m, { conn, command, usedPrefix }) => {
  if (/^truth$/i.test(command)) {
    let res = await fetch(API('amel', '/truth', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.send2Button(m.chat, json.result, 'ROZZxBOTZ', 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, m)
  }
  if (/^dare$/i.test(command)) {
    let res = await fetch(API('amel', '/dare', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.send2Button(m.chat, json.result, 'ROZZxBOTZ', 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, m)
  }
}
handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod|truth|dare)$/i

module.exports = handler 
