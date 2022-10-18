
const productsController = require('./products.controller')

const getAllProducts = (req, res) => {
    productsController.getAllProducts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postProducts = (req, res) => {
    const data = req.body;
    if (data.name && data.category && data.price) {
        productsController.createProducts(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => res.status(400).json({ message: err.message }))
    } else {
        res.status(400).json({ message: 'Missing data' })
    }
};

const getProductById = (req, res) => {
    const id = req.params.id;

    productsController.getProductById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(404).json({ message: err.message })
        })
}

const patchProducts = (req, res) => {
    const id = req.params.id;
    const {name, category, price, isAvailable} = req.body;

    productsController.editProducts(id, {name, category, price, isAvailable})
        .then(response => {
            res.status(200).json({
                message: `Product with id: ${id}, edited succesfully!`
            })
        })
        .catch(error => {
            res.status(400).json({message: error.message})
        })
}

const deleteProducts = (req, res) => {
    const id = req.params.id;
    productsController.deleteProducts(id)
        .then(response => {
            if(response){
                res.status(204).json()
            }else{
                res.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch(err => res.status(400).json(err))
}

const putProducts = (req, res) => {
    const id = req.params.id;
    const {name, category, price, isAvailable} = req.body;

    if (name && category && price && isAvailable) {
        productsController.editProducts(id, {name, category, price, isAvailable})
            .then(response => {
                if(response[0]){
                    res.status(200).json({message: `Products with ID: ${id}, edited succesfully! `})
                }else{
                    res.status(404).json({message: err.message})
                }
            })
            .catch(err => res.status(400).json({message: err.message}))
    }else{
        res.status(400).json({message: `Missing data`, fields:{
            name: "string",
            categoty: "string",
            price: "integer",
            isAvailable: "boolean"
        } })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    postProducts,
    patchProducts,
    deleteProducts,
    putProducts,
}

