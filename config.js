import 'dotenv/config';

const config = {
    APP_PORT:                process.env.APP_PORT || 3000,
    APP_PERSISTENCE_TYPE:     process.env.APP_PERSISTENCE_TYPE || 'MEMORY',
    MONGODB_TIMEOUT:         process.env.MONGODB_TIMEOUT || 10000,
    MONGODB_CONNECTION_STR:   process.env.MONGODB_CONNECTION_STR || 'mongodb://localhost:27017/ecommerce',
};

export default config;
