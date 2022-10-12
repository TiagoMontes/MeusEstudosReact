const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());

// Rotas - Endpoints
app.get('/', (req, res) => {
    res.json({ message: 'Primeira rota criada com sucesso!' })
})


app.listen(3000)