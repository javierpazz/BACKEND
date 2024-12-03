const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const multer = require("multer");
const path = require("path");
const fs = require("fs");


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
app.use('/api/admin/products', require('./routes/admproducts') );
app.use('/api/admin/upload', require('./routes/admproductsupload') );
app.use('/api/admin/orders', require('./routes/admorders') );
// app.use('/api/events', require('./routes/events') );
app.use('/api/seed', require('./routes/seed') );
app.use('/api/search', require('./routes/searchPro') );
app.use('/api/productbyslug', require('./routes/productbyslug') );
app.use('/api/productbysear', require('./routes/productbysear') );
app.use('/api/product', require('./routes/product') );
app.use('/api/products', require('./routes/products') );
app.use('/api/orders', require('./routes/orders') );
app.use('/api/orderbyid', require('./routes/orderbyid') );
app.use('/api/ordersbyus', require('./routes/ordersbyus') );

//////////////////dfdfdf

// Crear la carpeta "uploads" si no existe
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configuración de Multer para el almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Carpeta de destino
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Nombre único
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para subir una imagen
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    res.status(200).json({
      message: "Imagen subida exitosamente",
      filePath: `/uploads/${req.file.filename}`, // Ruta de acceso
    });
  } catch (error) {
    res.status(500).json({ message: "Error al subir la imagen", error });
  }
});

// Servir imágenes estáticas
app.use("/uploads", express.static(uploadsDir));
//////////////////dfdfdf

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});






