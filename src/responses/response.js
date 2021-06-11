const success = (req, res, message, status) => {
    res.status(status || 200).send(message);
}

const error = (req, res, message, status, log) => {
    //console.log(log.message);
    res.status(status).send(message);
}

const response = {
    success,
    error
}

module.exports = response