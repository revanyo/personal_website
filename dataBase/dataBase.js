const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/blog'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection

connection.once('open', (err) => {
    if (err) {
        throw err
    } else {
        console.log('Connected to MongoDB')
    }
})

let Schema = mongoose.Schema

let PostSchema = new Schema(
    {
        title: String,
        body: String,
        date: Date,
        username: String,
        views: Number,
    },
    { collection: 'Blogs' },
)

const Blog = mongoose.model('Blogs', PostSchema);

module.exports = { Blog }