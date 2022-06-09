//Capa de servicio
import { model } from './model'; 
import { LookEmails, TriggerEmail } from './types';

// getEmails
const getEmails = async (data: LookEmails) => {
  try {
    return await model.getEmails(data)
  } catch (err) {
    console.log(err);
    throw Error(String(err));
  }
};

// triggermail
const trigger = async (data: TriggerEmail) => {
  try {
    return await model.trigger(data)
  } catch (err) {
    console.log(err);
    throw Error(String(err));
  }
};

export const repository = { getEmails, trigger };
