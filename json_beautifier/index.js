const fs = require('node:fs');
const readLine = require('node:readline');


console.log ("Bem vindo ao JSON Beautifier!");
const [, , inputFile] = process.argv;

if (!inputFile) {
    console.error("Os arquivos necessários não foram fornecidos.");
    process.exit(1);
}

try {
    const jsonInput = fs.readFileSync(inputFile, 'utf-8');
    const parsed = JSON.parse(jsonInput);
    const beautified = JSON.stringify(parsed, null, 2);
    console.log("\n=== Pré-visualização do JSON Formatado ===\n");
    console.log(beautified);
    console.log("\n==========================================\n");
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