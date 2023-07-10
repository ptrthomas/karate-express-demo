const express = require('express')
const app = express()
const port = 3000

const testData = [
    {
        "name": "John Mayer",
        "info": {
            "title": "Mr.",
            "age": "35",
            "phone": "23423423-23423",
            "email": "jmayer@test.com"
        },
        "id": "old001"
    }
]

app.get('/users', (req, res) => {
    res.status(200).send(testData)
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})