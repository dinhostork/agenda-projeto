module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('contacts', 'id_owner', {
            type: Sequelize.INTEGER,
            references: { model: 'users', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false,
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('contacts', 'owner');
    },
};
