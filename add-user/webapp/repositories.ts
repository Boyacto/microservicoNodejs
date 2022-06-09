//Capa de servicio

/** source/controllers/posts.ts */
import { Request, Response } from 'express';
import { model } from './model'; 
import { CreateUserData } from './types';


const getUsers = async () => {
  try {
      return await model.getUsers()
  } catch (err) {
    console.log(err);
    throw Error(String(err));
  }
};

// getting all posts
const getUserById = async (id: number) => {
  try {
    return await model.getUser(id)
  } catch (err) {
    console.log(err);
    throw Error(String(err));
  }
};

// getting all posts
const postUser = async (data: CreateUserData) => {
  console.log("im in repos")
  try {
    return await model.createUser(data)
  } catch (err) {
    console.log(err);
    throw Error(String(err));
  }
};

// getting all posts
const deleteUser = async (id: number) => {
  try {
    return await model.deleteUser(id)
  } catch (err) {
    console.log(err);
    throw Error(String(err));
  }
};

export const repository = { getUsers, getUserById, postUser, deleteUser };
