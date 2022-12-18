const dotenv = require('dotenv') 
const express = require("express") 
const task = require('./routes/task') 
const {connectDB} = require('./db/connect')

dotenv.config()
const port = process.env.PORT
const connectionString = process.env.DB_URL
const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
    res.status(200).json({'message': 'hello world'})
})

app.use('/api/v1/task', task)

const start = async() => {
    try {
        await connectDB(connectionString)
        console.log('Connected to DB')
        app.listen(port, console.log(`Server is listening on ${port}`))

    } catch (error) {
        console.log(error)
    }
}

start()

