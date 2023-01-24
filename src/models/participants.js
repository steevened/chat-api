const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return participants.init(sequelize, DataTypes);
}

class participants extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    conversation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'conversations',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'participants',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "participants_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
