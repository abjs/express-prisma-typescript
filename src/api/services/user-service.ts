import { Prisma } from '@prisma/client';
import { prisma } from '@helper';
import { ResponseService } from '@services';
import { CreateUser, UpdateUser } from '@validations';

export class UserService extends ResponseService {
	async createNewUser(data: CreateUser) {
		try {
			const user = await prisma.user.create({
				data,
			});
			return this.ApiSusses('Create User', 201, 'User Created', user);
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					return this.ApiError('error', 404, 'user already exist', {
						code: error.code,
						message: error.message,
						meta: error.meta,
						// name: error.name,
						// stack: error.stack,
					});
				} else {
					return this.ApiError('error', 500, error.message);
				}
			}
		}
	}
	async getUser(userId: string) {
		try {
			const user = await prisma.user.findUnique({
				where: {
					userId,
				},
			});
			return this.ApiSusses('success', 200, 'User Found', user);
		} catch (error: any) {
			console.error(error);
			return this.ApiError('error', 500, error.message);
		}
	}
	async getALLUser() {
		try {
			const user = await prisma.user.findMany({});
			return this.ApiSusses('success', 200, 'User Found', user);
		} catch (error: any) {
			console.error(error);
			return this.ApiError('error', 500, error.message);
		}
	}
	async updateUser(userId: string, data: UpdateUser) {
		try {
			const user = await prisma.user.update({
				where: {
					userId,
				},
				data,
			});
			return this.ApiSusses('success', 200, 'User Updated', user);
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					return this.ApiError('error', 404, error.message, {
						code: error.code,
						message: error.message,
						cause: error.cause,
						meta: error.meta,
						name: error.name,
						stack: error.stack,
					});
				} else {
					return this.ApiError('error', 500, error.message);
				}
			}
		}
	}
	async deleteUser(userId: string) {
		try {
			const user = await prisma.user.delete({
				where: {
					userId,
				},
			});
			return this.ApiSusses('success', 200, 'User Deleted', user);
		} catch (error) {
			console.log(error);
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === 'P2025') {
					return this.ApiError('error', 404, 'no user found', {
						code: error.code,
						// message: error.message,
						// cause: error.cause,
						meta: error.meta,
						name: error.name,
						// stack: error.stack,
					});
				}
			} else {
				console.error(error);
				return this.ApiError('error', 500, 'unknown error');
			}
		}
	}
}
