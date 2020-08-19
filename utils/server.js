const express = require('express')
const app = express()

app.use('/imgs', express.static('./editor/imgs'))
app.use('/src', express.static('src'))
app.use('/', express.static('build'))

app.listen(8000, () => console.log('http://localhost:8000/'))
