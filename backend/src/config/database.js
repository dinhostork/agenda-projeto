module.exports = {
    dialect: 'sqlite',
    storage: './src/database/db.sqlite',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
