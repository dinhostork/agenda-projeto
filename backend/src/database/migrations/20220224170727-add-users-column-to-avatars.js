module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('avatars', 'id_contact', {
            type: Sequelize.INTEGER,
            references: { model: 'contacts', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false,
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('avatars', 'id_contact');
    },
};
