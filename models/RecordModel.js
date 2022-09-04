module.exports = (sequelize, DataTypes) => {
  const RecordModel = sequelize.define(
    "records",
    {
      staffname: {
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
      lettername: {
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
      letterprice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      kagawadname: {
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
      clientname: {
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );

  return RecordModel;
};
