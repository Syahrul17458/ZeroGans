let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *AXIS:* [083805870343]
┣➥ *XL:* [087833996829]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/12817206020*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
