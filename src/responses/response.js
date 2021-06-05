const success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: '',
        message: message
    });
}

const error = (req, res, message, status, log = '') => {
    console.log(log);
    res.status(status || 200).send({
        error: message,
        message: ''
    });
}

module.exports = {
    success,
    error
}