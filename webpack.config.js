const path = require('path'); //Simplifica la busqueda de rutas
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin'); //Copia los archivos al build
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Minifica y optimiza el css

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'; //Indica que usaremos Node en el entorno de desarrollo

const dirApp = path.join(__dirname, 'app'); //Define una dirección para la carpeta app
const dirAssets = path.join(__dirname, 'assets');
const dirStyles = path.join(__dirname, 'styles');
