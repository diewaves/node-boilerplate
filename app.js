const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  // const api = await initApi(req)
  // const defaults = await handleRequest(api)
  // res.render('base', {
  //   ...defaults
  // })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
