const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || err.status || (res.statusCode !== 200 ? res.statusCode : 500);
    let title = "SERVER_ERROR";
    let message = err.message;

    if (err instanceof SyntaxError && err.type === "entity.parse.failed") {
        title = "Invalid JSON";
        message = "Request body is not valid JSON. Send raw JSON without extra quotes.";
        return res.status(400).json({
            title,
            message
        });
    }

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            title = "Validation Failed";
            break;
        case constants.UNAUTHORIZED:
            title = "Unauthorized";
            break;
        case constants.FORBIDDEN:
            title = "FORBIDDEN";
            break;

        case constants.NOT_FOUND:
            title = "NOT_FOUND";
            break;
        case constants.SERVER_ERROR:
            title = "SERVER_ERROR";
            break;
        default:
            title = "Error";
            break;
    }

    res.status(statusCode).json({
        title,
        message: err.message,
        stackTrace: err.stack
    });
}

module.exports = errorHandler;
