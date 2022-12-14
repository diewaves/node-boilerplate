require('dotenv').config()

// Utiliza const en lugar de imports ya que no tenemos configurado como module en el package.json
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

// Se inicia la api pasandole los datos de autenticación
const initApi = req => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req
  })
}

// Integración con Prismic
const Prismic = require('@prismicio/client')
const PrismicDOM = require('prismic-dom')

// Los link resolvers nos ayudarán a navegar por la estructura de la web y llamar a las páginas que necesitemos
const handleLinkResolver = doc => {
  if (doc.type === 'about') {
    return '/about'
  }

  return '/'
}

// Middleware son funciones que permiten acceder al endpoint y obtener la información de un objeto
app.use((req, res, next) => {
  res.locals.ctx = {
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: handleLinkResolver
  }

  res.locals.PrismicDOM = PrismicDOM

  next()
})

app.set('views', path.join(__dirname, 'views'))// Encuentra los archivos pug con las vistas
app.set('view engine', 'pug')// Habilita el renderizado de pug

// app.get('/', async (req, res) => { // Renderizado normal
//   res.render('pages/home')
// })

app.get('/', async (req, res) => {
  initApi(req).then(api => {
    api.query(
      Prismic.Predicates.any('document.type', ['meta', 'home'])).then(response => {
      const { results } = response
      const [meta, home] = results
      // console.log(meta)
      res.render('pages/home', {
        meta,
        home
      })
    })
  })
})

app.get('/about', async (req, res) => { // Obtención de datos de prismic para cada vista
  initApi(req).then(api => {
    api.query(
      // Prismic.Predicates.at('document.type', 'about'), // Si quisieramos pasar un solo documento
      Prismic.Predicates.any('document.type', ['meta', 'about'])).then(response => { // Este es el objeto de respuesta. Se renderiza la vista aquí
      const { results } = response // Creamos un constructor. Desestructuración de javascript
      const [meta, about] = results // Deconstruimos el array en un objeto
      // console.log(results) // Esto devuelve un array con el objeto, sería lo mismo que response.results, si logeamos ahora about nos saca el objeto libre
      res.render('pages/about', {
        // document: response.results[0]
        meta,
        about // Al haber hecho la desestructuración, podemos colocar aqui el objeto directo
      })
    })
  })
})

// app.get('/', async (req, res) => {
//   res.render('base', { // De esta forma podemos renderizar un archivo de pug y pasarle datos en un objeto
//     meta: {
//       data: {
//         title: '',
//         description: ''
//       }
//     }
//   })
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
