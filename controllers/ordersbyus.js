const { response } = require('express');
const { isValidObjectId } = require('mongoose');
const Order = require('../models/orderModel');

const getOrdersByUs = async( req, res = response ) => {
    console.log(req.query);
    const { id } = req.query;
    const orders = await Order.find({ user : id }).lean();
    return res.status(200).json( orders );
}



module.exports = {
    getOrdersByUs,
}


// ddddddddddddddddddddddddddddddddd




// const { response } = require('express');
// const Order = require('../models/orderModel');



// const getOrdersByUs = async( req, res = response ) => {
//     console.log(req.query.id)
//     const { id } = req.query;

//     // if ( !isValidObjectId(id) ){
//     //     return null;
//     // }

//     const order = await Order.find({ user : id }).lean();
 
//     if ( !order ) {
//         return null;
//     }

//     return res.status(200).json( order );
//     // return JSON.parse(JSON.stringify(order));

// }



// module.exports = {
//     getOrdersByUs,
// }