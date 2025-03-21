import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import { healthRouter } from './routes/health.js';

dotenv.config() //configures .env to be usable in our project
// console.log(process.env.MONGODB_URI)

//connect to MongoDB
await mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(e => console.error(e))


const PORT = process.env.PORT || 4000;

const app = express();


// set view engine
app.set('views', './views')
app.set('view engine', 'pug')


// middleware
app.use(express.static('./public')) //serves static files and makes them available to the templates
app.use(express.json()) //built in express middleware that parses json in req into req.body
app.use(express.urlencoded({extended: true})) //built in express middleware that will parse info from url
app.use(morgan('dev')); //logging middleware
app.use(helmet()); // security middleware that makes server more secure, sets a bunch of security headers by default
app.use(cors()); //enables full-stack app in development can be turned off in production or can be added to individual routes as middleware



// routes
app.get('/', (req, res) => {
    res.render('index');
})

app.use('/api/health', healthRouter)

//global error handling middleware
app.use((err, _req, res, next) => {
    console.error(err);
    res.status(500).send("Seems like we messed up somewhere...");
  });

app.listen(PORT, () => {
    console.log(`Sever is running on port: ${PORT}`)
})