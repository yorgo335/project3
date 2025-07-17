import express, { urlencoded } from "express";
import contactusRouter from './routes/contact.js';

const app = express();

app.use(urlencoded({extended: true}));

app.use('/contactus', contactusRouter);

app.listen(3000);