'use strict';
const AutomakerService = require('../services/automakerService');

class AutomakerController {
    static async get(req, res) {
        let retorno = await AutomakerService.listAll();
        return res.send(retorno);
    }
}

module.exports = AutomakerController;