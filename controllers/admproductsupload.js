const { response } = require('express');
const { isValidObjectId } = require('mongoose');
const formidable = require('formidable');
const Product = require('../models/productModel');
const fs = ('fs');
const multer = require ('multer');
const upload = multer();


const saveFile = async( file ) => {
    // const saveFile = async( file: formidable.File ): Promise<string> => {

        // const data = fs.readFileSync( file.filepath );
        // fs.writeFileSync(`./public/${ file.originalFilename }`, data);
        // fs.unlinkSync( file.filepath ); // elimina
        // return;
        // const { secure_url } = await cloudinary.uploader.upload( file.filepath );
        // return secure_url;
    
    }
    


const parseFiles = async(req) => {

    return new Promise( (resolve, reject) => {

        const form = new formidable.IncomingForm();
        form.parse( req, async( err, fields, files ) => {
            console.log({ err, fields, files });

            if ( err ) {
                return reject(err);
            }

            await saveFile( files.file )
            // await saveFile( files.file)
            resolve(true);
            
        })

    }) 

}

const uploadfile =  async( req, res = response ) => {
    upload.single("file");

    const imageUrl = await parseFiles(req);
        // console.log("kkkkkkkkk")
        // await parseFiles(req);
        
        return res.status(200).json({ message: imageUrl });
    }
    

module.exports = {
    uploadfile
}



