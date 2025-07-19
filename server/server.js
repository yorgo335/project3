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

        //the code below is heavily similar to the one I used to load all products above, the difference
        //is that findOne({ where: { id: parseInt(req.params.id)}}) will allow me to get a single result compared to all products
        //ofcourse if the product exists that is.
        //also we parseInt since id was passed down as string so we need to match the data type thats we used parseInt

        app.get("/api/store/:id", async (req, res) => {
            const product = await productRepository.findOne({ where: { id: parseInt(req.params.id) } });

            return res.json({ 
                status: "OK", 
                data: product 
            });
        });

    });
}).catch(error => {
        console.log(error);
});
