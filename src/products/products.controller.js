const Products = require('../models/products.models')

const uuid = require('uuid')

const getAllProducts = () => {
    const data = Products.findAll()
    return data
}

const createProducts = async (data) => {
    const newProducts = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    })
    //Insert into
    return newProducts
}

const getProductById = async (id) => {
    const data = await Products.findOne({
        where:{
            id: id
        }
    });
    //seletct * from products where id = id
    return data;
}

const editProducts = async (id, data) => {
   const response = await Products.update(data, {
    where:{
        id: id
    }
   });
   return response //si el where no encuentra nada, retorna null
};

const deleteProducts = async (id) => {
    const data = await Products.destroy({
        where:{
            id: id
        }
    });
    return data;
}


module.exports = {
    getAllProducts,
    createProducts,
    getProductById,
    editProducts,
    deleteProducts
}