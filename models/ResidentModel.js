module.exports = (sequelize, DataTypes) => {
  const ResidentModel = sequelize.define(
    "residents",
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      middlename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      purokNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Sitio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Birthdate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Sex: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CivilStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Citizenship: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Occupation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PWD: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      FourPSMember: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      RegisterVoter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );

    return ResidentModel;

};
