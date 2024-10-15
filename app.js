const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')
const folderRouter = require('./routes/folders')
const linkRouter = require('./routes/link')


app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Authorization")
    res.header("Access-Control-Allow-Methods","PUT,POST,DELETE,GET,PATCH")

    // if(res.method === 'OPTIONS'){
    //     res.header("Access-Control-Allow-Methods","PUT,POST,DELETE,GET,PATCH")
    //     return res.status(200).json({})
    // }
    next();
})

app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/user',userRouter)
app.use('/folders',folderRouter)
app.use('/links',linkRouter)



module.exports = app
