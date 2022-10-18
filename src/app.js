const express = require('express')

const db = require('./utils/database')

const initModels = require('./models/initModels');

const config = require('./config');

const app = express();

const productsRuter = require('./products/products.router')

//autenticar contraseñas con el usuario
db.authenticate()
    .then(() => console.log('DB Authentication succesfully'))
    .catch((err) => console.log(err))

//sincroniza los modelos creando las tablas
db.sync()
    .then(()=> console.log('Database sycend'))
    .catch(err => console.log(err))

initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'ok!'})
})

app.use('/products', productsRuter)

app.listen(config.port, ()=> {
    console.log(`Sever started at port ${config.port}`);
})