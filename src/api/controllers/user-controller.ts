import { UserService } from '@services';
import { createUser, deleteUser, getUser, updateUser } from '@validations';
import { Response, Request } from 'express';
import { TypedRequest, TypedRequestBody, TypedRequestParams } from 'zod-express-middleware';
const userService = new UserService();
export class UserController {
	constructor() {}
	async getAllUser(req: Request, res: Response) {
		res.status(200).json(await userService.getALLUser());
	}
	async getUser(req: TypedRequestParams<typeof getUser>, res: Response) {
		res.status(200).json(await userService.getUser(req.params.userId));
	}
	async createUser(req: TypedRequestBody<typeof createUser>, res: Response) {
		res.status(200).json(await userService.createNewUser(req.body));
	}
	async updateUser(req: TypedRequest<typeof getUser, any, typeof updateUser>, res: Response) {
		res.status(200).json(await userService.updateUser(req.params.userId, req.body));
	}
	async deleteUser(req: TypedRequestParams<typeof deleteUser>, res: Response) {
		res.status(200).json(await userService.deleteUser(req.params.userId));
	}
}
