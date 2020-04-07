module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Rooms', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      unique: true,
    },
    roomNumber: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    roomType: {
      type: Sequelize.STRING,
      required: true
    },
    availability: {
      type: Sequelize.BOOLEAN,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Rooms')
};