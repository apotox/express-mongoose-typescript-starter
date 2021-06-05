import mongoose from "mongoose"

const MONGO_DB = process.env.MONGO_DB || ''
const RECONNECT_DELAI = 2000; // 2 sec

export default function(callback:(err?:Error)=>void){
    const reconnect=()=>{
        mongoose.connect(MONGO_DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 5000
        })
    }
    mongoose.connection.on("open",callback)
    mongoose.connection.on("error",callback)

    mongoose.connection.on("disconnected",()=>{
        console.info('reconnecting to database...')
        setTimeout(reconnect, RECONNECT_DELAI);
    })

    reconnect()

}