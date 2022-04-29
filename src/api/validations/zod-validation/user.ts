import * as z from "zod";
import { validateRequestBody } from "zod-express-middleware";

export const _UserModel = z.object({
  userId: z.string().nullish(),
  email: z.string().email(),
  fullName: z.string(),
  age: z.number().int(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
});

export const _GetUserModel = z.object({
  userId: z.string(),
});
export const _DeleteUserModel = z.object({
  userId: z.string(),
});

export interface UpdateUserType extends z.infer<typeof _UserModel> {
  userId: string;
}

export type UserType = z.infer<typeof _UserModel>;
export type GetUserType = z.infer<typeof _GetUserModel>;
export type DeleteUserType = z.infer<typeof _DeleteUserModel>;

export const createUserValidation = validateRequestBody(_UserModel);
