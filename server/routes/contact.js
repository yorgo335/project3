/* eslint-disable no-unused-vars */
import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

const folderPath = "server/contactus-submissions";

router.post('/', (req, res, next)=>{

    const filePath = path.join(folderPath, `${req.body.name} ${new Date().toLocaleString().replaceAll("/", "-").replaceAll(":", "-")}.txt`);

    fs.writeFile(filePath, `Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone: ${req.body.phonenumber ? req.body.phonenumber : ""}\nComment: ${req.body.comment}`, (err) => {
        if (err) throw err;
        console.log("File saved!");
});
    
    res.redirect("/");
});


export default router;