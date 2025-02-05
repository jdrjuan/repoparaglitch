import {products} from '../constants/constants.js';

class ProductModelMem {

    getNextId = () => (Number(products[products.length - 1].id) + 1).toString();

    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - C: Create                              //
    ////////////////////////////////////////////////////////////////////////////////

    createProduct = product => {
        product.id = this.getNextId();
        products.push(product);
        return product;
    };


    ////////////////////////////////////////////////////////////////////////////////
    //                               CRUD - R: Read                               //
    ////////////////////////////////////////////////////////////////////////////////

    getProducts = () => products;

    getProduct = id => products.find(producto => producto.id === id);


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - U: Update                              //
    ////////////////////////////////////////////////////////////////////////////////

    updateProduct = (id, product) => {
        const index = products.findIndex(producto => producto.id === id);
        if (index === -1) {
            return null;
        }
        product.id = id;
        products[index] = product;
        return product;
    };


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - D: Delete                              //
    ////////////////////////////////////////////////////////////////////////////////

    deleteProduct = id => {
        const index = products.findIndex(producto => producto.id === id);
        if (index === -1) {
            return null;
        }
        const product = products.splice(index, 1)[0];
        return product;
    };

}

export default ProductModelMem;
