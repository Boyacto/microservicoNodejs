//Capa de modelo
import { prisma } from "./database";
import { LookEmails,TriggerEmail} from "./types";

async function getEmails(dto: LookEmails) {
  return prisma.trigger.findMany({ where: { from_email: dto.from_email } });
}
async function trigger(data: TriggerEmail) {
  return prisma.trigger.create({
    data: data,
    select: {
      id: true,
      from_email: true,
      to_email: true,
      content: true,
    }
  });
}

export const model = {
  getEmails,
  trigger
};
