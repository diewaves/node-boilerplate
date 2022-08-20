const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))// Encuentra los archivos pug con las vistas
app.set('view engine', 'pug')// Habilita el renderizado de pug

app.get('/', async (req, res) => {
  res.render('base', { // De esta forma podemos renderizar un archivo de pug y pasarle datos en un objeto
    meta: {
      data: {
        title: '',
        description: ''
      }
    }
  })
  // const api = await initApi(req)
  // const defaults = await handleRequest(api)
  // res.render('base', {
  //   ...defaults
  // })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
