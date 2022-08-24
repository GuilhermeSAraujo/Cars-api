'use strict';
const AutomakerRepository = require('../repositories/automakerRepository');

class AutomakerService {
    static async createOne(name) {
        console.log('Chamou o service');
        await AutomakerRepository.createAutomaker(name);
    }
}

module.exports = AutomakerService;
