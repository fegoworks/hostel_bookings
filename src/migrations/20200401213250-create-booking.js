module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Bookings', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      unique: true,
    },
    userId: {
      type: Sequelize.UUID,
      required: true
    },
    roomId: {
      type: Sequelize.UUID,
      required: true
    },
    numberOfGuests: {
      type: Sequelize.INTEGER,
      required: true
    },
    roomType: {
      type: Sequelize.STRING,
      required: true
    },
    checkIn: {
      type: Sequelize.DATE,
      required: true
    },
    checkOut: {
      type: Sequelize.DATE,
      required: true
    },
    bookingDate: {
      type: Sequelize.DATE,
      required: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Bookings')
};