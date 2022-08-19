const Yup = require('yup');

class RobotTaskValidator {
    errorResponse (errors) {
        const e = errors.errors.map(msg => msg.message);
        return e.length > 1 ? e : e[0];
    }
}

module.exports = new RobotTaskValidator()