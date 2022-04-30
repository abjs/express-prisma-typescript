import { Prisma, User } from '@prisma/client';
import { UserService } from '@services';
import { _DeleteUserModel, _GetUserModel, _UserModel } from '@validations';
import { Request, Response } from 'express';
import { TypedRequestBody, TypedRequest, TypedRequestParams } from 'zod-express-middleware';
const userService = new UserService();
export class UserController {
	working(req: Request, res: Response) {
		res.status(200).json({
			status: 'success',
			message: 'API  is running from user route',
		});
	}
	async create(req: TypedRequestBody<typeof _UserModel>, res: Response) {
		const { fullName, age, email } = req.body;
		try {
			const data = await userService.createUser({
				fullName,
				age,
				email,
			});
			res.status(200).json({
				message: 'user created done',
				data,
			});
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					res.status(400).json({
						message: 'user already exist',
					});
				} else {
					res.status(400).json({
						message: 'user not created',
					});
				}
			}
		}
	}
	async get(req: TypedRequestParams<typeof _GetUserModel>, res: Response) {
		const { userId } = req.params;
		const data = await userService.getUser({ userId });
		if (!data) {
			res.status(404).json({
				message: 'user not found',
			});
		} else {
			res.status(200).json({
				message: 'get user done',
				data,
			});
		}
	}
	async getAll(req: Request, res: Response) {
		const data = await userService.getAllUser();
		res.status(200).json({
			message: 'user data fetched successfully',
			data,
		});
	}
	async delete(req: TypedRequestParams<typeof _DeleteUserModel>, res: Response) {
		const { userId } = req.params;
		const data = await userService.deleteUser({
			userId,
		});
		res.status(data.status).json(data);
	}
	async update(req: TypedRequest<typeof _GetUserModel, any, typeof _UserModel>, res: Response) {
		const { fullName, age, email } = req.body;
		const { userId } = req.params;
		const { status, ...data } = await userService.updateUser({
			userId,
			fullName,
			age,
			email,
		});
		res.status(status).json(data);
	}
}
