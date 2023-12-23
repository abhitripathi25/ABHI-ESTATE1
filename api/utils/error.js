// utils/errorHandler.js
// sample error jo hume show krna ho user ko
// indexedDB.js me bhi jo h wo bhi kr skte h but best prac ye h

export const errorHandler = (statusCode,message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
  };
  