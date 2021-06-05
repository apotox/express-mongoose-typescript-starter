
import {Document, model, Schema} from "mongoose"


export interface IUser extends Document {
    email: string,
    fullname: string,
    address: string,
    phone: string,
    _doc?: any,
    View(): IUser
}


export const schema: Schema<IUser> = new Schema({
    email: {
        type: String
    },
    fullname:{
        type: String
    },
    address:{
        type: String
    },
    phone:{
        type: String
    },
    password:{
        type: String
    }
},{
    timestamps: true
})

schema.methods ={
    View(){
        return {
            ...this._doc,
            password: undefined
        }
    }
}


export const User = model<IUser>('User',schema)



