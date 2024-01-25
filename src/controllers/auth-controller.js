const bcrypt = require("bcryptjs");
const { registerSchema } = require("../validators/auth-validator");

exports.register = async (req, res, next) => {
  try {
    const { value, error } = registerSchema.validate(req.body);
    console.log(value);
    if (error) {
      return next(error);
      // console.log(error);
    }
    // await prisma.user.create({
    //   data: {
    //     firstName,
    //     lastName,
    //     email,
    //     mobile,
    //     password,
    //   }
    // });
    value.password = await bcrypt
    res.json("ggggggggggggg");
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
  } catch (error) {
    next(err);
  }
};
