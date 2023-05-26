const express = require('express')
const cors = require('cors')
const app = express()
const port = 9000

// middelware 
app.use(cors())

const chef = require('./data/chefinformation.json')

// initial server 
app.get('/', (req, res) => {
  res.send('project 10 running...')
})

app.get('/chefinformation',(req,res)=>{
    res.send(chef)
})

// finding data Or single data 
app.get('/chefinformation/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const findingdata = chef.find(singleData => parseInt(singleData.id) === id)
    res.send(findingdata)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})