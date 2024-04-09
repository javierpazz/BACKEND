const { response } = require('express');
const Order = require('../models/orderModel');



const getOrderById = async( req, res = response ) => {
    console.log(req.query.id)
    const { id } = req.query;

    // if ( !isValidObjectId(id) ){
    //     return null;
    // }

    const order = await Order.findById( id ).lean();
 
    if ( !order ) {
        return null;
    }

    return res.status(200).json( order );
    // return JSON.parse(JSON.stringify(order));

}



module.exports = {
    getOrderById,
}