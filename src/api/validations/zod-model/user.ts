import * as z from 'zod';
import { validateRequest, validateRequestBody } from 'zod-express-middleware';

export const _UserModel = z.object({
	userId: z.string(),
	email: z.string().email(),
	fullName: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const createUser = _UserModel.partial({
	createdAt: true,
	updatedAt: true,
	userId: true,
});
export const getUser = z.object({
	userId: z.string(),
});
export const updateUser = _UserModel.omit({ createdAt: true, updatedAt: true }).partial();
export const deleteUser = z.object({
	userId: z.string(),
});

export type CreateUser = z.infer<typeof createUser>;
export type UpdateUser = z.infer<typeof updateUser>;
export type GetUser = z.infer<typeof getUser>;
export type DeleteUser = z.infer<typeof deleteUser>;

export const createUserValidation = validateRequestBody(createUser);
export const updateUserValidation = validateRequest({
	params: getUser,
	body: updateUser,
});
export const getUserValidation = validateRequest({ params: getUser });
export const deleteUserValidation = validateRequest({ params: getUser });
