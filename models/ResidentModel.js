module.exports = (sequelize, DataTypes) => {
  const ResidentModel = sequelize.define(
    "residents",
    {
      image: {
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
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
      suffix:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      address:{
        type: DataTypes.STRING,
        allowNull : false,
      },
      birthdate: {
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
      birthplace:{
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
      sex: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      civilstatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parentsname:{
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
      siblingsname:{
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
      citizenship: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      occupation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PWD: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      fourpsmember: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      registervoter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      occupancystatus:{
        type: DataTypes.STRING,
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
