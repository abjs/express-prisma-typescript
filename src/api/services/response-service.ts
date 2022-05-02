export class ResponseService {
	constructor() {}
	ApiResponse<T, E>(
		status: string,
		StatusCode: number,
		error: boolean,
		message: string,
		data?: T | null,
		errorData?: E
	) {
		return {
			error,
			errorData: errorData || null,
			status,
			StatusCode,
			message,
			data: data || null,
			timestamp: new Date().toISOString(),
		};
	}
	ApiSusses<T>(status: string, statusCode: number, message: string, data?: T) {
		return this.ApiResponse(status, statusCode, false, message, data, null);
	}
	ApiError<T>(status: string, statusCode: number, message: string, error?: T) {
		return this.ApiResponse(status, statusCode, true, message, null, error);
	}
}
