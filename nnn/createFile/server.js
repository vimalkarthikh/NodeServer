const express= require("express");
const path =require("path");
const fs=require("fs");

const app =express();

const outputFolder="./output";
if(!fs.existsSync(outputFolder)){
    fs.mkdirSync(outputFolder);
};

const PORT=4000;

app.get("/create",(req,res)=>{
    const cur=new Date();
    const year=cur.getFullYear().toString();const mtg=(cur.getMonth()+1).toString();const dt=cur.getDate().toString();
    const hr=cur.getHours().toString();const min=cur.getMinutes().toString();const sec=cur.getSeconds().toString();

    const dateTime=`${dt}-${mtg}-${year}-${hr}-${min}-${sec}.txt`;

    const fpath=path.join(outputFolder,dateTime);

    fs.writeFile(fpath, cur.toISOString(), (err)=>{
        if(err){
            res.status(500).send(`ERROR creating File: ${err}`);
            return;
        }

       
    });
    res.send(`FILE Created Successfully at:  ${fpath}`);
});

app.get("/getFile",(req,res)=>{
    fs.readdir(outputFolder,(err,file)=>{
        if(err){
            res.status(500).send(`ERROR creating File: ${err}`);
            return;
        }
        console.log(`List Files: ${file}`);
        const tf=file.filter((file)=>path.extname(file)==='.txt');

        res.json(tf);

    });
});


app.listen(PORT,()=>{console.log(`Server is running in potrt: ${PORT}`)});
