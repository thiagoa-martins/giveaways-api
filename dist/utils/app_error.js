"use strict";
const appError = (message, statusCode = 400) => {
    return {
        status: "error",
        message: message,
        status_code: statusCode,
    };
};
module.exports = appError;
