const path = require('path'); //Simplifica la busqueda de rutas
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin'); //Copia los archivos al build
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Minifica y optimiza el css

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'; //Indica que usaremos Node en el entorno de desarrollo

const dirApp = path.join(__dirname, 'app'); //Define una dirección para la carpeta app
const dirAssets = path.join(__dirname, 'assets');
const dirStyles = path.join(__dirname, 'styles');
const dirNode = 'node_modules';

module.exports = {
  entry: [
    path.join(dirApp, 'index.js'), //Añadimos el index principal de js
    path.join(dirStyles, 'index.scss'), //Añadimos el index principal de js
  ],

  resolve: {
    modules: [dirApp, dirAssets, dirNode, dirStyles], //Esto ayuda aque en tus archivos no tengas que escribir la ruta completa y sus niveles
  },

  plugins: [
    new webpack.DefinePlugin({
      //Nos ayuda a chequear si estamos en entorno desarrollo
      IS_DEVELOPMENT,
    }),
  ],
};
