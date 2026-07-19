# Desafio: Formatador JSON Local Seguro (CLI)

## 🎯 Objetivo
Desenvolver uma ferramenta de linha de comando (CLI) em Node.js que receba um arquivo de texto contendo um JSON bruto (minificado ou bagunçado) e exporte um novo arquivo com o JSON formatado e indentado corretamente (*pretty-print*).

## 🚀 Requisitos Obrigatórios
* **Zero APIs Externas:** O processamento deve ser 100% offline para garantir a segurança dos dados sensíveis.
* **Interação via Terminal:** O script deve receber o caminho do arquivo de origem e o caminho do arquivo de destino como argumentos na linha de comando.
* **Tratamento de Erros Amigável:** Se o JSON for inválido, a aplicação não deve estourar um *stack trace* gigantesco. Deve capturar o erro e exibir uma mensagem clara.
* **Arquitetura Limpa:** Aplique princípios de Clean Code. Separe as responsabilidades: a função que lê o arquivo não deve ser a mesma que formata os dados ou a que salva o resultado.

## ⚠️ Condições e Restrições
* Não é permitido o uso de bibliotecas externas de formatação (como `prettier` via npm). Use apenas recursos nativos do Node.js.
* A indentação padrão deve ser de **2 espaços**.

## 🧪 Casos de Teste

### Caso A (Caminho Feliz)
* **Entrada:** `{"nome":"João","idade":31,"skills":["Java","Node"],"ativo":true}`
* **Saída Esperada:** Um arquivo `.json` com o objeto perfeitamente indentado com 2 espaços.

### Caso B (JSON Quebrado)
* **Entrada:** `{"nome":"João", "idade": 31,}` *(vírgula sobrando no final)*
* **Saída Esperada:** O programa não gera arquivo e exibe no terminal: `[Erro] O arquivo fornecido não contém um JSON válido.`

### Caso C (Arquivo Inexistente)
* **Entrada:** Um caminho para um arquivo `.txt` que não existe no sistema.
* **Saída Esperada:** `[Erro] Arquivo de origem não encontrado no caminho especificado.`

## 💡 Dicas de Implementação
* Use o módulo nativo `node:fs` (ou `fs/promises`) para a leitura e escrita dos arquivos.
* O objeto global `process.argv` será essencial para capturar os caminhos passados pelo terminal. Lembre-se que os dois primeiros itens do array `argv` são o executável do Node e o caminho do script.
* A formatação pode ser resolvida de forma nativa e elegante explorando os parâmetros adicionais do método `JSON.stringify()`.