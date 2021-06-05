import { Router } from "express";
import {create,update} from '../controllers/user'
const route = Router()

route.post('/',create)
route.put('/:id',update)

export default route
