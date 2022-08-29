'use strict';
const AutomakerRepository = require('../repositories/automakerRepository');

class AutomakerService {
    static async listAll() {
        return await AutomakerRepository.listAllAutomaker();
    }
}

module.exports = AutomakerService;
