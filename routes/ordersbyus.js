/*
    Event Routes
    /api/orders
*/
const { Router } = require('express');
const { check } = require('express-validator');

// const { isDate } = require('../helpers/isDate');
// const { validarCampos } = require('../middlewares/validar-campos');
// const { validarJWT } = require('../middlewares/validar-jwt');
const { getOrdersByUs } = require('../controllers/ordersbyus');

const router = Router();

// Todas tienes que pasar por la validación del JWT
// router.use( validarJWT );



// Obtener productos
router.get('/', getOrdersByUs );



module.exports = router;