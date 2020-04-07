module.exports = (sequelize, DataTypes) => {
  const RoomType = sequelize.define(
    'RoomType', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        required: true,
        primaryKey: true,
      },
      roomType: {
        type: DataTypes.STRING,
        required: true,
      },
      gender: {
        type: DataTypes.STRING,
        required: true
      },
      numberOfBeds: {
        type: DataTypes.INTEGER,
        required: true,
      },
      price: {
        type: DataTypes.UUID,
        required: true,
      },
    }, {}
  );
  RoomType.associate = (models) => {
    // associations can be defined here
    RoomType.belongsTo(models.Room, {
      foreignKey: 'id',
    });
  };
  return RoomType;
};