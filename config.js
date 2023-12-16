global.owner = ['6282328530382']  
global.mods = ['6282328530383'] 
global.prems = ['6282328530383']
global.nameowner = 'MR Perkoro'
global.numberowner = '6281395861695' 
global.mail = 'machfudem@gmail.com' 
global.gc = 'https://chat.whatsapp.com/Ln2vHjRrRayAbzalRMB56r'
global.instagram = 'https://www.instagram.com/perkorodunyo_/'
global.wm = '© REXYZ'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'REXYZ_42'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
