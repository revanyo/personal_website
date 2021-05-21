const express = require("express");
const path = require("path");
const db = require('../dataBase/dataBase.js')

const PORT = 4000;
const app = express();

app.use(express.static(path.join(__dirname, "..", "/public")));
app.use(express.json())

app.get('/blogs', (req, res) => {
  db.Blog.find((err, data) => {
    if (err) {
      res.status(400)
    } else {
      res.status(200)
      res.send(data)
    }
  })
})

app.post('/blogs', (req, res) => {
  console.log('rec')
  let item = {
    title: req.body.title,
    body: req.body.body,
    date: new Date()
  }

  db.Blog.create(item, (err, data) => {
    if (err) {
      res.status(400)
    } else {
      res.status(200)
      res.send(data)
    }
  })
})

app.delete('/blogs/:id', (req, res) => {
  let query = { _id: req.params.id }
  db.Blog.deleteOne(query, (err, data) => {
    if (err) {
      res.status(400)
    } else {
      res.status(200)
      res.send(data)
    }
  })
})

app.listen(PORT, () => {
  console.log("listening on", PORT);
});
