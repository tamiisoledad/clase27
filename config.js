/* module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 3000
} */

require('dotenv').config()

/* const fondo = process.env.FONDO
const frente = process.env.FRENTE

console.log({
   fondo,
   frente
}) */

const path = require('path')
const dotenv = require('dotenv')
const MODO = process.env.MODO || '123';

dotenv.config({
   path:
       MODO == 'byn'
           ? path.resolve(__dirname, 'byn.env')
           : path.resolve(__dirname, 'colores.env')
})

const fondo = process.env.FONDO
const frente = process.env.FRENTE

console.log({
   fondo,
   frente
})

