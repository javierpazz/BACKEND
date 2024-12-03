const { response } = require('express');
const Product = require('../models/productModel');



const SHOP_CONSTANTS = {
    validGenders: ['men','women','kid','unisex'],
}


const getProductBySear = async( req, res = response ) => {
    console.log(req.query)
    const { term } = req.query;
    
    const products = await Product.find({
        $text: { $search: term }
    })
    .select('title images price inStock slug -_id')
    .lean();



    if( !products ) {
        return res.status(404).json({
            message: 'Producto no encontrado'
        })
    }

    

    return res.status(200).json( products );

}



module.exports = {
    getProductBySear,
}