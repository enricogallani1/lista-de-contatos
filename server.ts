const User = require('./user');
import express from 'express';
const app = express();
app.use(express.json());
const conn = require('./config');

conn.sync().then(() => {
    console.log('Tabelas sincronizadas com sucesso')
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*")
    next();
});

app.get('/contact', async (req, res, next) => {
    res.status(200).json(
        await User.findAll()
    );
});

app.put('/contact', async (req, res, next) => {
    try {
        await User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }, {
            where: {
                number: req.body.number
            },
        });
        res.status(200).json({ message: "Usuário editado com sucesso!" })
    } catch (err) {
        res.status(500)
    }
});

app.post('/contact', async (req, res, next) => {
    try {
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            number: req.body.number
        });
        res.status(200).json({ message: "Usuário criado com sucesso!" })
    } catch (err) {
        res.status(500)
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(
        `Server running on ${PORT}.`
    )
});