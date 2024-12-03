/*
    User Routes
    /api/admin/users
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getProducts, updateProduct, createProduct } = require('../controllers/admproducts');

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use( validarJWT );


// Obtener Users
router.get('/', getProducts );

// Actualizar User
router.put(
    '/', 
    updateProduct 
);

// crear User
router.post(
    '/', 
    createProduct 
);




module.exports = router;