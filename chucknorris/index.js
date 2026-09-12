const https = require('https');
const readline = require('readline');

const url = 'https://api.chucknorris.io/jokes/random';

function getJoke() {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log(JSON.parse(data).value);
      rl.question('Deseja outra frase? (s/n): ', (answer) => {
        if (answer.toLowerCase() === 's') {
          getJoke();
        } else {
          rl.close();
        }
      });
    });
  }).on('error', (err) => {
    console.error(err);
    rl.question('Deseja outra frase? (s/n): ', (answer) => {
      if (answer.toLowerCase() === 's') {
        getJoke();
      } else {
        rl.close();
      }
    });
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Deseja iniciar o jogo? (s/n): ', (startAnswer) => {
  if (startAnswer.toLowerCase() === 's') {
    getJoke();
  } else {
    console.log('Saindo...');
    rl.close();
  }
});
