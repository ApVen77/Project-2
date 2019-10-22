module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true},
        email: { type: DataTypes.STRING, validate: { isEmail: true } },
        password: { type: DataTypes.STRING, allowNull: false },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    User.associate = function (models) {
        User.hasMany(models.Have, {
            onDelete: "cascade",
        });
    };
    User.associate = function (models) {
        User.hasMany(models.Want, {
            onDelete: "cascade",      
        });
    };
    return User;
}