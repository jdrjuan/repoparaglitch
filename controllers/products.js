import api from '../api/products.js';


////////////////////////////////////////////////////////////////////////////////
//                               Get Controller                               //
////////////////////////////////////////////////////////////////////////////////

const getProducts = async (req, res) => {
    const products = await api.getProducts();
    if (!products) {
        return res.status(404).json({message: 'Productos no encontrados', products: []});
    }
    res.json(products);
};

const getProduct = async (req, res) => {
    const {id} = req.params;
    const product = await api.getProduct(id);
    if (!product) {
        return res.status(404).json({message: 'Producto no encontrado', product: null});
    }
    res.json({message: 'ok', product});
};


///////////////////////////////////////////////////////////////////////////////
//                              Post Controller                              //
///////////////////////////////////////////////////////////////////////////////

const postProduct = async (req, res) => {
    const product = req.body;
    const createdProduct = await api.createProduct(product);
    res.status(201).json({message: 'ok', createdProduct});
};


////////////////////////////////////////////////////////////////////////////////
//                               Put Controller                               //
////////////////////////////////////////////////////////////////////////////////

const putProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;
    const updatedProduct = await api.updateProduct(id, product);
    if (!updatedProduct) {
        return res.status(404).json({message: 'Producto no encontrado', product: null});
    }
    res.json({message: 'ok', updatedProduct});
};


///////////////////////////////////////////////////////////////////////////////
//                             Delete Controller                             //
///////////////////////////////////////////////////////////////////////////////

const deleteProduct = async (req, res) => {
    const {id} = req.params;
    const removedProduct = await api.deleteProduct(id);
    if (!removedProduct) {
        return res.status(404).json({message: 'Producto no encontrado', product: null});
    }
    res.json({message: 'ok', removedProduct});
};


export default {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct,
};
