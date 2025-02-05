import express from 'express';
import {engine} from 'express-handlebars';
import routerProducts from './routers/products.js';
import {products} from './constants/constants.js';

import config from './config.js';

const PORT = config.APP_PORT;
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/api/products', routerProducts);

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');


///////////////////////////////////////////////////////////////////////////////
//                                 Rutas GET                                 //
///////////////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.render('home', { title: 'Inicio' });
});

app.get('/products', (req, res) => {
    res.render('products', {
        title: 'Productos',
        // products: products
        products
    });
});

app.get('/products/create', (req, res) => {
    res.render('products-create', { title: 'Productos' });
});

app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    const product = products.find(product => product.id === id);
    if (!product) {
        return res.status(404).render('error-404');
    }
    const objectForRender = {
        title: `Detalles de ${product.title}`,
        product: {...product},
    };
    res.render('product', objectForRender);
});


////////////////////////////////////////////////////////////////////////////////
//                                 Rutas POST                                 //
////////////////////////////////////////////////////////////////////////////////

app.post('/products/create', (req, res) => {
    res.send('<h1>Producto dado de alta con éxito</h1>');
});


const server = app.listen(PORT, () => console.log(`Servidor Node.js + Express escuchando en el puerto ${PORT}.`));
server.on('error', error => console.log(`Se produjo un error al iniciar el servidor Node.js + Express: ${error.message}`));
