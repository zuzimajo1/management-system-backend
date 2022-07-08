const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

//Routers
const authRouter = require('./routers/AuthRouter');
const residentRouter = require('./routers/ResidentRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/auth', authRouter);
app.use('/api/resident', residentRouter)

app.get('/', (req, res)=> res.send('Home'))



const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Server is listening on port ${port}`));
