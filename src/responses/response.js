const success = (req, res, message, status) => {
    res.status(status || 200).send(message);
}

const error = (req, res, message, status, log) => {
    console.log(log || "");
    res.status(status || 500).send(message || 'Ha ocurrido un error inesperado.');
}

const response = {
    success,
    error
}

module.exports = response