const Joi = require("joi");

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  emailOrMobile: Joi.alternatives([
    Joi.string().email(),
    Joi.string().pattern(/^[0-9]{10}$/),
  ])
    .required()
    .strip(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
  mobile: Joi.forbidden().when("emailOrMobile", {
    is: Joi.string().pattern(/^[0-9]{10}$/),
    then: Joi.string().default(Joi.ref("emailOrMobile")),
  }),
  email: Joi.forbidden().when("emailOrMobile", {
    is: Joi.string().email(),
    then: Joi.string().default(Joi.ref("emailOrMobile")),
  }),
});

// const validate = schema => input => {

// }

// exports.validateRegister = input => {
//   const { value, error } = registerSchema.validate(input);
// }

exports.registerSchema = registerSchema;
