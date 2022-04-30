import { NextFunction, Request, Response } from 'express';
export class LogMiddleware {
	getPath(req: Request, res: Response, next: NextFunction) {
		console.log(`currant path is: ${req.path} and method is: ${req.method}`);
		next();
	}
}
