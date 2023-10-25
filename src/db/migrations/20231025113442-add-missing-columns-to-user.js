"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await Promise.all([
      queryInterface.addColumn("Users", "reset_password_token", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Users", "reset_password_token_sent_at", {
        type: Sequelize.DATE,
      }),
      queryInterface.addColumn("Users", "avatar_url", {
        type: Sequelize.STRING,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await Promise.all([
      queryInterface.removeColumn("Users", "reset_password_token"),
      queryInterface.removeColumn("Users", "reset_password_token_sent_at"),
      queryInterface.removeColumn("Users", "avatar_url"),
    ]);
  },
};
