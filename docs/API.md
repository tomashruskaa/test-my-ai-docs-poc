# API

## GET `/`

- Vrátí jednoduchou textovou odpověď, která potvrzuje, že server běží.

### Response (200)

- Body: `API běží. Zkus /todos`

---

## GET `/todos`

- Vrátí seznam ukázkových TODO položek.

### Response (200)

```json
[
  { "id": 1, "text": "První úkol", "done": false },
  { "id": 2, "text": "Druhý úkol", "done": true }
]
