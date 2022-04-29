import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import crypto from "crypto";
export const hashData = (data: string) => {
  return crypto.createHash("sha256").update(data).digest("hex");
};

export const TimeDeferenceInMinutes = (
  startTime: Date | string,
  endTime: string | Date
) => {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const diff = end.getTime() - start.getTime();
  const diffInMinutes = Math.round(diff / 60000);
  return diffInMinutes;
};

export const generateErrorMessage = (
  message: string,
  propertyPath?: string
) => ({
  errors: {
    body: [
      {
        message,
        propertyPath,
      },
    ],
  },
});
