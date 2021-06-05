import express from "express";
import { User } from "../models/User";
import {merge} from "lodash"


/**
 * create new user
 * @param req
 * @param res
 * @param next
 */
export const create = async (
  req: express.Request,
  res: express.Response,
  next: (err?: Error) => void
): Promise<express.Response> => {
  const payload = req.body;

  const user = await User.create(payload);

  return res.status(200).json({
    success: true,
    item: user.View()
  });
};

/**
 * update a user by id
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const update = async (
  req: express.Request,
  res: express.Response,
  next: (err?: Error) => void
): Promise<express.Response> => {

  const payload = req.body
  const {id} = req.params

  let user = await User.findById(id)
  if(!user){
    return res.status(404).json({
      success: false,
      message: "user not found!"
    })
  }

  user = merge(user,payload)

  await user?.save()


  return res.status(200).json({
    success: true,
  });
};
