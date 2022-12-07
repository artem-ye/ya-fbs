function validate1cToken(token) {
    if (token === '123') {
        return true;
    }

    return false;
}

const authService = {
    validate1cToken
}

module.exports = authService;
