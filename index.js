const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const consola = require('consola');
const { spawn, exec, execSync } = require("child_process")
const rs = require('readline-sync');
const speed = require('performance-now')

const sc = `git clone https://github.com/zenixx77/stumblezenix/`

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});



(async () => {

exec(sc);

const ip = require("ip");
const ipj = `${ip.address()}`
		
  const timestamp = speed();
      const latensi = speed() - timestamp
			
									
  console.log(`

███████████████████████████████████████████████
█░▄▄░▄█▄─▄▄─█▄─▀█▄─▄█▄─▄█▄─▀─▄█▄─▀─▄█▄▄▄░█▄▄▄░█
██▀▄█▀██─▄█▀██─█▄▀─███─███▀─▀███▀─▀████░████░██
▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▀▀▄▄▀▄▄▄▀▄▄█▄▄▀▄▄█▄▄▀▀▄██▀▀▄██▀
${chalk.bgRed.bold(` Developer Script : `)} ${chalk.white.bold(`ZenixXX7`)} 
${chalk.bgRed.bold(` Version : `)} ${chalk.white.bold(`2.0.2`)}
${chalk.bgWhite.bold.black(` Information Script : `)} ${chalk.white.bold(`NodeJs`)} 
${chalk.bgWhite.bold.black(` Keamanan Script : `)} ${chalk.white.bold(`99% Safe`)} 
${chalk.bgRed.bold(` Orang Yang Membantu Saya Menyusun Script Ini `)} ${chalk.white.bold(`Eskey,Epan,Arnazxyz,Dkmpostor,Vaengg,Zenixx7`)} 

${chalk.bgRed.bold(`Contact Developer  : `)} ${chalk.blue(`Discord : `)} ${chalk.bgWhite.bold.black(`zenix77#5157`)}
`);

  const auth = rs.question('Enter Authentication Code! : ');
  chalk.bgYellow.bold('');
 
  
  while (true) {

    const result = await GoStumble(auth);
    if (!result) {

      chalk.bgRed.bold('Terjadi Kesalahan Saat Login Menggunakan Cookie,Mungkin Cookie Expired Atau Salah');
      break;
			
    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

(console.log(`[ ${moment().format('HH:mm:ss')} ] 
${chalk.blue.dim(`⟩ User : ${username}`)} ${chalk.green.dim(`⟩ Trophy : ${trophy}`)} ${chalk.red.dim(`⟩ Crown : ${crown}`)}
${chalk.white(` `)}`));
      await sleep(4500);

    } else if (result == 'BANNED') {
      console.log(consola.error(`Your Account has been Banned`));
     break;
    }
  }


})();
