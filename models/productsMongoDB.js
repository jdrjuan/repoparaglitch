import mongoose from 'mongoose';
import MongoDB from './DB/MongoDB.js';


const productsSchema = new mongoose.Schema({
    "name": String,
    "price": Number,
    "stock": Number,
    "brand": String,
    "category": String,
    "shortDescription": String,
    "longDescription": String,
    "freeShipping": Boolean,
    "mainPhoto": String
});


const Product = mongoose.model('Product', productsSchema);

class ProductModelMongoDB {

    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - C: Create                              //
    ////////////////////////////////////////////////////////////////////////////////

    createProduct = async product => {
        if (! await MongoDB.connectDB()) {
            return null;
        }
        try {
            const newProduct = new Product(product);
            await newProduct.save();
            return newProduct;
        } catch (error) {
            console.error(`Error al crear el producto: ${error.message}`);
            return null;
        }
    };


    ////////////////////////////////////////////////////////////////////////////////
    //                               CRUD - R: Read                               //
    ////////////////////////////////////////////////////////////////////////////////

    getProducts = async () => {
        if (! await MongoDB.connectDB()) {
            return null;
        }
        try {
            const products = await Product.find({});
            return products;
        } catch (error) {
            console.error(`Error al leer los productos: ${error.message}`);
            return null;
        }
    };

    getProduct = async id => {
        if (! await MongoDB.connectDB()) {
            return null;
        }
        try {
            const foundProduct = await Product.findById(id);
            return foundProduct;
        } catch (error) {
            console.error(`Error al leer el producto: ${error.message}`);
            return null;
        }
    };


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - U: Update                              //
    ////////////////////////////////////////////////////////////////////////////////

    updateProduct = async (id, product) => {
        if (! await MongoDB.connectDB()) {
            return null;
        }
        try {
            const updatedProduct = await Product.findByIdAndUpdate(id, {$set: product}, {
                returnDocument: 'after'
            });
            return updatedProduct;
        } catch (error) {
            console.error(`Error al actualizar el producto ${id}: ${error.message}`);
            return null;
        }
    };


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - D: Delete                              //
    ////////////////////////////////////////////////////////////////////////////////

    deleteProduct = async id => {
        if (! await MongoDB.connectDB()) {
            return null;
        }
        try {
            const deletedProduct = await Product.findByIdAndDelete(id);
            return deletedProduct;
        } catch (error) {
            console.error(`Error al eliminar el producto ${id}: ${error.message}`);
            return null;
        }
    };


}

export default ProductModelMongoDB;
