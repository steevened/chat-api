const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return conversations.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     conversation:
 *       type: object
 *       required: [title, participant]
 *       properties:
 *         title:
 *           type: string
 *           example: chat 1
 *         image_url:
 *           type: string
 *           example: https://www.pex.com/img1
 *         type:
 *           type: string
 *           enum: [single, group]
 *           example: single
 *         participant:
 *           type: integer
 *           example: 2
 */

class conversations extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image_url: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        created_by: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        type: {
          type: DataTypes.ENUM('single', 'group'),
          allowNull: true,
          defaultValue: 'single',
        },
      },
      {
        sequelize,
        tableName: 'conversations',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: 'conversations_pkey',
            unique: true,
            fields: [{ name: 'id' }],
          },
        ],
      }
    );
  }
}
