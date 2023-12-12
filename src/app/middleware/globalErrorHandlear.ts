/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import config from "../config";
import { TErrorResponse } from "../types/TErrorResponse";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const errorResponse: TErrorResponse = {
        statusCode: err.statusCode || 5000,
        status: err.status || 'error',
        message: err.message || 'something Went wrong',
        issues: err.issues || []

    }
    res.status(errorResponse.statusCode).json({
        status: errorResponse.status,
        message: errorResponse.message,
        issues: errorResponse.issues,
        stuck: config.node_env === "development" ? err.stack : undefined,
        error: err

    })
}
export default globalErrorHandler