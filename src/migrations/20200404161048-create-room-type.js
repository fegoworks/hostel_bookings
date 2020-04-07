module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('RoomTypes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    roomType: {
      type: Sequelize.STRING,
      required: true,
    },
    gender: {
      type: Sequelize.STRING,
      required: true
    },
    numberOfBeds: {
      type: Sequelize.INTEGER,
      required: true,
    },
    price: {
      type: Sequelize.UUID,
      required: true,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('RoomTypes')
};