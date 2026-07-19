const fs = require('node:fs');

console.log ("Bem vindo ao JSON Beautifier!");
const [, , inputFile, outputFile] = process.argv;

if (!inputFile || !outputFile) {
    console.error("Os arquivos necessários não foram fornecidos.");
    process.exit(1);
}

try {
    const jsonInput = fs.readFileSync(inputFile, 'utf-8');
    console.log (jsonInput);
} catch (error) {
    console.error("Erro ao ler o arquivo de entrada:", error.message);
    process.exit(1);
}