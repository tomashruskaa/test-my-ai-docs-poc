const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Jednoduchý testovací endpoint
app.get("/todos", (req, res) => {
  res.json([
    { id: 1, text: "První úkol", done: false },
    { id: 2, text: "Druhý úkol", done: true },
  ]);
});

app.get("/", (req, res) => {
  res.send("API běží. Zkus /todos");
});

app.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
});
