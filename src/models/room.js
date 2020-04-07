module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    'Room', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        required: true,
        primaryKey: true,
      },
      roomNumber: {
        type: DataTypes.INTEGER,
        required: true,
      },
      roomType: {
        type: DataTypes.STRING,
        required: true,
      },
      availability: {
        type: DataTypes.BOOLEAN,
        required: true
      },
    }, {}
  );
  Room.associate = (models) => {
    // associations can be defined here
    Room.belongsTo(models.User, {
      foreignKey: 'id'
    });

    Room.hasOne(models.RoomType, {
      foreignKey: 'roomType'
    });
  };
  return Room;
};