const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors())

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/user', require('./routes/auth') );
app.use('/api/admin', require('./routes/admadmin') );
app.use('/api/admin/users', require('./routes/admusers') );
app.use('/api/admin/orders', require('./routes/admorders') );
// app.use('/api/events', require('./routes/events') );
app.use('/api/seed', require('./routes/seed') );
app.use('/api/search', require('./routes/searchPro') );
app.use('/api/productbyslug', require('./routes/productbyslug') );
app.use('/api/product', require('./routes/product') );
app.use('/api/products', require('./routes/products') );
app.use('/api/orders', require('./routes/orders') );
app.use('/api/orderbyid', require('./routes/orderbyid') );



// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});






