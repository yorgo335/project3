import "reflect-metadata";
import express, { urlencoded } from "express";
import contactusRouter from "./routes/contact.js";
import { AppDataSource } from "./AppDataSource.js";
import { product } from "./entities/Product.js";

const app = express();

app.use(urlencoded({extended: true}));

app.use('/api/contactus', contactusRouter);

//ok so im initializing the AppDataSource aka the database
//if successfull it will app.listen to port 3000 and log that it is listening
//else it will show the error like a password error

AppDataSource.initialize().then(()=>{

    app.listen(3000, () => {
        console.log('App listening on port 3000');

        const productRepository = AppDataSource.getRepository(product);

        app.get("/api/store", async(req, res) => {
            const allProducts = await productRepository.find();

            return res.json({
                status: 'OK',
                data: allProducts
            });
        })

    });
}).catch(error => {
        console.log(error);
});
