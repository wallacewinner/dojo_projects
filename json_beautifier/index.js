const fs = require('node:fs');

console.log ("Bem vindo ao JSON Beautifier!");
const [, , inputFile, outputFile] = process.argv;

if (!inputFile || !outputFile) {
    console.error("Os arquivos necessários não foram fornecidos.");
    process.exit(1);
}

try {
    const jsonInput = fs.readFileSync(inputFile, 'utf-8');
    const parsed = JSON.parse(jsonInput);
    const beautified = JSON.stringify(parsed, null, 2);
    fs.writeFileSync(outputFile, beautified, 'utf-8');
    console.log(`Arquivo JSON formatado e salvo em: ${outputFile}`);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("Erro de sintaxe no JSON:", error.message);
    } else if (error.code === 'ENOENT') {
        console.error("Erro ao ler o arquivo de entrada:", error.message);
        process.exit(1);
    } else {
        console.error("Erro desconhecido:", error.message);
        process.exit(1);
    }
    process.exit(1);
}