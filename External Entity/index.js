const express = require('express')
const app = express()
const external_entity = require('./routes/api/external_entity')
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to external_entity</h1>
    <a href="/api/external_entity">external_entity</a>
    `);
})

app.use('/api/external_entity', external_entity)
const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
