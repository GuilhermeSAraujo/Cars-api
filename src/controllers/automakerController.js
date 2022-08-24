'use strict';
const { createAutomaker } = require('../repositories/automakerRepository');

class AutomakerController {
    static async post(req, res) {
        await createAutomaker("Automaker");
        return true;
    }
}

module.exports = {
    AutomakerController,
};
