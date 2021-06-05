import express,{ Router } from "express";
import userRoutes from './user.routes'
const route = Router()


/** api routes */
route.use('/users',userRoutes)


/** default route */
route.get('/',(req:express.Request,res:express.Response)=>{
    return res.status(200).json({
        success: true,
        message: "welcome the API index 🍰"
    })
})

export default route
