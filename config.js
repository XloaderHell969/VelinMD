/*
    Base By ArxzyDev
    Recode By QyuuNee
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6288294029936
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Koneko-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '' // AMBIL DI LOLHUMAN
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'VELinXD'
global.namaowner = 'VELin'
global.wagc = "https://chat.whatsapp.com/feifkirjgirjgirjf"

//—————「 Setting Owner 」—————//
global.owner = ['6288294029936']
global.nomerowner = '6288294029936'
global.premium = ['6288294029936']

//—————「 Set Wm 」—————//
global.packname = 'VELinXD'
global.author = 'Bot: VELinXD\nYouTube: xloaderhell666\nInstagram: velinxd_'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 3k Permanen* 😋\n\n🍂 *Subscribe Channel Owner Pakai 10 Akun Gratis Premium Bot (Sertakan Bukti)* ❗',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 3k Permanen',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50
}

//—————「 Set Image 」—————//
global.imageurl = 'https://i.ibb.co/X5RqTRK/adrian.jpg'
global.link = 'https://www.youtube.com/@xloaderhell666/'
global.thumb = fs.readFileSync('./media/koneko.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
