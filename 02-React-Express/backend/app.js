import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

const PORT = 8000

app.listen(PORT,() => {
    console.log(`app is running at port ${PORT}`)
})

app.get('/', (req,res) => {
    res.send('Hello')
})