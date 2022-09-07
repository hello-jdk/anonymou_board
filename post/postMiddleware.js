const { body, validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const inValidCreate = [
  body("title")
    .notEmpty()
    .withMessage("제목을 입력해주세요.")
    .isLength({ max: 20 })
    .withMessage("제목은 최대 20자를 넘을 수 없습니다."),
  body("content")
    .notEmpty()
    .withMessage("내용을 입력해주세요.")
    .isLength({ max: 200 })
    .withMessage("내용은 최대 200자를 넘을 수 없습니다."),
  body("user_id").notEmpty().withMessage("아이디를 입력해주세요.").trim(),
  body("user_pw")
    .notEmpty()
    .withMessage("비밀번호를 입력해주세요.")
    .trim()
    .matches("[0-9]")
    .withMessage("비밀번호는 숫자를 1개 이상 포함해야합니다."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ message: errors.array().map((e) => e.msg) });
    }
    next();
  },
];

module.exports = { inValidCreate };
