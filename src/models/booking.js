module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      required: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      required: true
    },
    roomId: {
      type: DataTypes.UUID,
      required: true
    },
    numberOfGuests: {
      type: DataTypes.INTEGER,
      required: true
    },
    roomType: {
      type: DataTypes.STRING,
      required: true
    },
    checkIn: {
      type: DataTypes.DATE,
      required: true
    },
    checkOut: {
      type: DataTypes.DATE,
      required: true
    },
    bookingDate: {
      type: DataTypes.DATE,
      required: true
    }
  }, {});
  Booking.associate = (models) => {
    // associations can be defined here
    Booking.hasOne(models.Room, {
      foreignKey: 'roomId'
    });

    Booking.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Booking;
};