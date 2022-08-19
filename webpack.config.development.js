const { merge } = require('webpack-merge'); //Copia y une las declaraciones del config en el resto de configs para no repetirlas
const path = require('path');

const config = require('./webpack.config'); //Requiere configuración de webpack

module.exports = merge(config, {
  mode: 'development', //Modo desarrollo activado
  devtool: 'inline-source-map',
  devServer: {
    writeToDisk: true,
  },

  output: {
    path: path.resolve(__dirname, 'public'), //En esta carpeta va a alojar los archivos compilados mientras desarrollamos
  },
});
