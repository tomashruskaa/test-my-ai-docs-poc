# ARCHITECTURE

Tento projekt je jednoduché REST API v Node.js (Express).

## Komponenty

- `src/index.js` – hlavní vstupní bod aplikace
  - vytváří Express server
  - nastavuje middleware `express.json()`
  - registruje endpoint `/` a `/todos`
  - spouští server na portu 3000
