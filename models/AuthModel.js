module.exports = (sequelize, DataTypes) => {
  const AuthModel = sequelize.define(
    "auth",
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      middlename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );

  return AuthModel;
};
