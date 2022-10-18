const router = require('express').Router()

const productsServices = require('./products.services')


router.get('/', productsServices.getAllProducts)

router.get('/:id', productsServices.getProductById)

router.post('/', productsServices.postProducts)

router.patch('/:id', productsServices.patchProducts)

router.delete('/:id', productsServices.deleteProducts)

router.put('/:id', productsServices.putProducts)

module.exports = router