const mongoose = require('mongoose')
const dotenv = require('dotenv')

const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = {
    connectDB
}