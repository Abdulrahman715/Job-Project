const { body } = require("express-validator");

const validationSchema = () => {
    return [
      body("jobTitle")
        .notEmpty()
        .withMessage("please enter the jop")
        .isLength({ min: 2, max: 50 })
        .withMessage("jop title not satisfied"),

      body("softSkills")
        .notEmpty()
        .withMessage("please enter your softSkills")
        .isLength({ min: 2 })
        .withMessage("don't satisfied"),
    ];
};

module.exports = {
    validationSchema,
};
