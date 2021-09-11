const express = require('express')
const app = express()

// Setting view-engine as ejs
app.set('view-engine, ejs')

app.get('/', (req, res) => {
    res.render('defaultPage.ejs')
})

app.get('/edit', (req, res) => {
    res.render('editPage.ejs')
})

app.listen(3000)