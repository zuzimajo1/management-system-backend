module.exports = (sequelize, DataTypes)=>{
    const EventModel = sequelize.define(
      "events",
      {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        about: {
          type: DataTypes.STRING(1234),
          allowNull: true,
        },
        start: {
          type: DataTypes.STRING(1234),
          allowNull: false,
        },
        end: {
          type: DataTypes.STRING(1234),
          allowNull: false,
        },
      },
      {
        timestamps: true,
        freezeTableName: true,
      }
    );

   return EventModel; 
}