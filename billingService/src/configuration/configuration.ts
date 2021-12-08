require('dotenv').config();

export const SERVER_SECRET_KEY = process.env.MY_SERVER_PRIVATE_KEY;

export const MONGO_DB_URL = process.env.MY_DB_CONNECTION;

export const AMPQ_CONNECTION_URL = process.env.AMPQ_CONNECTION_URL;

export const PORT = process.env.PORT || 4567;