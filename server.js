import db from './backend/db.js'

import express from 'express'
import compression from 'compression'

import cors from 'cors'
import dotenv from 'dotenv'
import rate_limit from 'express-rate-limit'

import process from 'process'

const limiter = rate_limit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: 'Too many requests from this IP, please try again after 15 minutes',

})

const app = express()
if (process.env.NODE_ENV === 'production') {app.use(limiter)}
const port = process.env.PORT || 3000

app.disable('x-powered-by')
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])

var corsOptions = {origin:[''], credentials:true, optionsSuccessStatus: 200}
app.use(cors(corsOptions));

app.use(express.urlencoded({extended: false}))

app.use(compression())

dotenv.config()

app.use(express.json())

app.get('/:id', (req, res, next) => {
    const id = req.params.id
    const isId = (id) => {
        return /^[a-zA-Z0-9]{5}$/.test(id)
    }
    if (isId(id)) {
        res.send('id is valid')
    } else {
        next()
    }
})

app.listen(port, () => {console.log(`AMBHR-ORG listening on port ${port}`)})


