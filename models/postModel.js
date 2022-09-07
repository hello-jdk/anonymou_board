const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const Post = sequelize.define(
    "post",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.STRING,
      },
      user_pw: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      timestamps: true,
    }
  );

  return Post;
};
