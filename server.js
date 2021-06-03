const app = require('./src/api/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação executando na porta ', port);
});