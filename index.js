const express = require('express')
const app = express()
const port = 5000

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://7IEH:abcd1234@cluster0.fi9ky.mongodb.net/Cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(()=>console.log("MongoDB Connected..."))
  .catch(err=>console.err)


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})