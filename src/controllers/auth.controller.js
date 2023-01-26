const AuthServices = require('../services/auth.services');
const transporter = require('../utils/mailer');
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
  try {
    let { firstname, lastname, password, phone, email } = req.body;
    if (password.length < 3) {
      return res
        .status(400)
        .json({ message: 'password must be at least 3 characters long' });
    }

    const saltRounds = 10;
    password = bcrypt.hashSync(password, saltRounds);

    const user = {
      firstname,
      lastname,
      email,
      phone,
      password,
    };

    const result = await AuthServices.register(user);
    if (result) {
      res.status(201).json({ message: 'user created' });
      // res.status(201).json(result)
      await transporter.sendMail({
        to: result.email,
        from: 'alvaradosteven315@gmail.com',
        subject: 'Email confirmation',
        html: "<h1>Welcome to chatapp</h1> <p>Validate your email to continue</p> <p>Click <a href='#' target='_blank'>here</a></p>",
      });
    } else {
      res.status(400).json({ message: 'something wrong' });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        error: 'missing data',
        message: 'not email provided',
      });
    }
    if (!password) {
      return res.status(400).json({
        error: 'missing data',
        message: 'not password provided',
      });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { firstname, lastname, id, email } = result.user;
      const userData = { firstname, lastname, id, email };
      const token = AuthServices.genToken(userData);
      userData.token = token;
      // result.user.token = token;
      res.json(userData);
    } else {
      res.status(400).json('user not found');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
