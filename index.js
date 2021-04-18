const express = require('express')
const app = express()
const port = 8000

app.get('/health', (req, res) => res.send('Ok'))
app.listen(port, () => console.log('Example app listening on port $(port)'))