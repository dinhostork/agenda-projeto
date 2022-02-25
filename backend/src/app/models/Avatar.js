import Sequelize, { Model } from 'sequelize';

class Avatar extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,
                type: Sequelize.STRING,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `${process.env.APP_URL}/uploads/${this.type}/${this.path}`;
                    },
                },
            },
            { sequelize }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Contact, { foreignKey: 'id_contact', as: 'contact' });
    }
}
export default Avatar;
