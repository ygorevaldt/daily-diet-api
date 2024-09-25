import { HttpStatus } from "../http-status";

export class NotFoundException extends Error {
    constructor(
        message: string,
        readonly statusCode = HttpStatus.NOT_FOUND
    ) {
        super(message);
    }
}