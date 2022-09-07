const { PORT } = require("./config/config");

const express = require("express");
const logger = require("morgan");

const postRouter = require("./post/postRouter");

/**
 * 웹 서비스에 사용할 DataBase 설정
 */
function databaseConnection() {
  const { sequelize } = require("./models");

  sequelize.sync({ force: false }).catch((error) => {
    console.error(error);
  });
}

/**
 * 웹 서비스에 사용할 middleware 설정
 * @param {express.Application} app
 * @returns {express.Application}
 */
function middlewareLoader(app) {
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  return app;
}

/**
 * 웹 서비스의 API Routers 등록
 * @param {express.Application} app
 * @returns {express.Application}
 */
function routersRegister(app) {
  app.use("/api/post", postRouter);

  return app;
}

/**
 * express 서비스 생성
 */
async function expressInit() {
  const app = express();

  databaseConnection();
  middlewareLoader(app);
  routersRegister(app);

  return app.listen(PORT, () => {
    console.log("Running server on " + PORT);
  });
}

module.exports = {
  expressInit,
};
