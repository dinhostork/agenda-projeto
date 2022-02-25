import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Avatar from '../app/models/Avatar';
import Contact from '../app/models/Contact';
import User from '../app/models/User';

const models = [Avatar, Contact, User];

class Database {
    constructor() {
        this.init();
    }

    async init() {
        this.connnection = new Sequelize(dbConfig);
        models
            .map((model) => model.init(this.connnection))
            .map(
                (model) =>
                    model.associate && model.associate(this.connnection.models)
            );

    }
}

export default new Database();
