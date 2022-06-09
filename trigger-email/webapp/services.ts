//Capa de controller

/** source/controllers/posts.ts */
import { Request, Response } from 'express';
import  { repository } from './repositories';
import { v4 as uuidv4 } from "uuid";
import { LookEmails, TriggerEmail } from "./types"

const dtoGetEmails = (email: string):LookEmails => { return {from_email : email} };
const dtoTrigger = (trigger: TriggerEmail):TriggerEmail => { return trigger };

const getEmails = async (req: Request, res: Response) => {
  try {
      return res
        .status(200)
        .json(await repository.getEmails(dtoGetEmails(req.params.email)));
  } catch (err) {
      return res.status(500).json(err)
  }
};

const trigger = async (req: Request, res: Response) => {
  try {
      return res
        .status(200)
        .json(await repository.trigger(dtoTrigger(req.body)));
  } catch (err) {
      return res
        .status(500)
        .json(err)
  }
};

const status = async (req: Request, res: Response) => {
  return res.status(200).send("Ok");
};

 export const service = { getEmails, trigger, status};

