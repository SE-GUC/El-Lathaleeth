
const express = require('express')

const forms = require('./routes/api/forms')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Homepage</h1>`);
})

app.use('/api/forms', forms)

app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))