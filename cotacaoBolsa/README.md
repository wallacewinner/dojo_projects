# Cotação Bolsa - API de Consulta de Ações

API REST desenvolvida em Java com Spring Boot para consultar informações e cotações de ações da bolsa de valores em tempo real através da integração com a API da [BRAPI](https://brapi.dev).

---

## 📌 Ações Suportadas / Exemplo de Consulta

Você pode consultar as cotações de ações como:

- **`PETR4`** (Petrobras PN)
- **`MGLU3`** (Magazine Luiza ON)
- **`VALE3`** (Vale ON)
- **`ITUB4`** (Itaú Unibanco PN)

*(além de outros tickers suportados pela BRAPI)*

---

## 🛠️ Tecnologias Utilizadas

- **Java 21**
- **Spring Boot 3.3.5**
- **Spring Cloud OpenFeign** (para consumo da API externa BRAPI)
- **Maven** (gerenciamento de dependências e build)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Java 21** instalado
- **Maven** (ou utilize o wrapper `./mvnw` incluso no repositório)

### Passos para rodar a aplicação

1. **Navegar até a pasta do projeto:**
   ```bash
   cd cotacaoBolsa
   ```

2. **Compilar e executar o projeto:**
   Utilizando o Maven Wrapper:
   ```bash
   ./mvnw spring-boot:run
   ```
   Ou com Maven local:
   ```bash
   mvn spring-boot:run
   ```

3. A aplicação estará disponível em `http://localhost:8080`.

---

## 📡 Endpoints da API

### Obter Cotação de Ação
Retorna os dados atualizados da ação informada.

- **Endpoint:** `GET /stocks/{symbol}`
- **Parâmetro de URL:** `symbol` (ex: `PETR4`, `MGLU3`, `VALE3`, `ITUB4`)

#### Exemplos de Requisição:

- **PETR4 (Petrobras):**
  ```bash
  curl -X GET http://localhost:8080/stocks/PETR4
  ```

- **MGLU3 (Magazine Luiza):**
  ```bash
  curl -X GET http://localhost:8080/stocks/MGLU3
  ```

- **VALE3 (Vale):**
  ```bash
  curl -X GET http://localhost:8080/stocks/VALE3
  ```

- **ITUB4 (Itaú Unibanco):**
  ```bash
  curl -X GET http://localhost:8080/stocks/ITUB4
  ```

#### Exemplo de Resposta (JSON):
```json
{
  "resultados": [
    {
      "simboloSolicitado": "PETR4",
      "simbolo": "PETR4",
      "alterado": false,
      "dados": {
        "nomeCurto": "PETROBRAS   PN  N2",
        "moeda": "BRL",
        "precoMercado": 37.50,
        "variacaoPercentual": 1.25,
        "volumeMercado": 45000000,
        "valorDeMercado": 490000000000
      }
    }
  ],
  "dataConsulta": "2026-09-12T00:00:00Z",
  "tempoRespostaMs": 150
}
```

---

## 📁 Estrutura do Projeto

```text
cotacaoBolsa/
 ├── src/
 │   ├── main/
 │   │   ├── java/com/winner/stock/
 │   │   │   ├── client/          # Client Feign (BRAPI)
 │   │   │   ├── controller/      # Endpoints REST (/stocks/{symbol})
 │   │   │   ├── dto/             # Data Transfer Objects
 │   │   │   ├── service/         # Lógica de negócio
 │   │   │   └── StockApplication.java
 │   │   └── resources/
 │   │       └── application.properties
 ├── pom.xml
 └── README.md
```
