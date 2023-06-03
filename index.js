const express = require("express");
const app = express();

let contador = 0;
let relatorio = {
    contador: contador,
    incrementar1: 0,
    incrementar5: 0
}

app.get("/contador", function (req, res) {
    res.send({ contador });
});

app.get("/incrementar1", function (req, res) {
    contador++;
    relatorio.incrementar1++;
    res.send({ contador });
});
  
app.get("/incrementar5", function (req, res) {
    contador += 5;
    relatorio.incrementar5++;
    res.send({ contador });
});

app.get("/relatorio", function (req, res) {
    relatorio.contador = contador;
    res.send({ relatorio });
});

app.listen(3000);

module.exports = app;
