const User = require('./models/user');
import express from 'express';
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const PORT = 5000;
app.get('/contact', async (req, res, next) => {
    res.status(200).json(
         await User.findAll()
    );

});
app.put('/contact', async (req, res, next) => {

    await User.update({
         firstName: req.body.firstName,
         lastName: req.body.lastName,
     },
        {
            where: {
                number: req.body.number
              },
        });
        res.status(200).json({ message: "Usuário atualizado com sucesso!" })
});

app.post('/contact', async (req, res, next) => {

    await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number
    });
    res.status(200).json({ message: "Usuário criado com sucesso!" })
});

app.listen(PORT, () => {
    console.log(
        `Server running on ${PORT}.`
    )
});