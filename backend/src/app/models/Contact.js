import Sequelize, { Model } from 'sequelize';

class Contact extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                phone: Sequelize.STRING,
                email: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );


        return this;
    }

    static associate(models) {
        this.hasOne(models.Avatar, { foreignKey: 'id_contact', as: 'avatar' });
        this.belongsTo(models.User, { foreignKey: 'id_owner', as: 'owner' });

    }


}

export default Contact;
