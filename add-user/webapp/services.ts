//Capa de controller

/** source/controllers/posts.ts */
import { Request, Response } from 'express';
import  { repository } from './repositories';
import { v4 as uuidv4 } from "uuid";


const getUsers = async (req: Request, res: Response) => {
  try { 
    return res.status(200).json(await repository.getUsers());
  } catch (err) {
    return res.status(500).json(err)
  }
};

// getting all posts
const getUserById = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(await repository.getUserById(Number(req.params.id)));
  } catch (err) {
    return res.status(500).json(err)
  }
};

// getting all posts
const postUser = async (req: Request, res: Response) => {
  const data = {
    email: uuidv4() + "@email.com",
    hashed_password: "pwd"
  }
  try {
    return res.status(200).json(await repository.postUser(data));
  } catch (err) {
    return res.status(500).json(err)
  }
};

// getting all posts
const deleteUser = async (req: Request, res: Response) => {
  let { id } = req.params
  try {
    return res.status(204).json(await repository.deleteUser(Number(id)));
  } catch (err) {
    return res.status(500).json(err)
  }
};


 export const service = { getUsers, getUserById, postUser, deleteUser };

