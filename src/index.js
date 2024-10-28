import dotenv from 'dotenv'; 

import connect_DB from "./db/index.js";
dotenv.config({ path: './env' });


connect_DB()
.then(()=>
{
    app.listen(process.env.PORT||8000,()=>
    {
        console.log(`Sever is ruuning at port ${process.env.PORT}`)
    })
})
.catch((err)=>
    {
        console.log("MONGODB Connection Failed :",err)

    }
)