'use strict';
const AutomakerService = require('../services/automakerService');

class AutomakerController {
    static async post(req, res) {
        console.log('Chamou controller');
        console.log(req.data);
        await AutomakerService.createOne();
        return res.send();
    }
}

module.exports = AutomakerController;