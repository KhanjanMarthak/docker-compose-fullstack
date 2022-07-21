const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../../../models');

class Auth {
  static async login(req) {
    const { userName, password } = req.body;
    const user = await models.User.findOne({
      where: { userName }
    });

    if (!user) return false;
    if (await bcrypt.compare(password, user.password)) {
      return jwt.sign(userName, process.env.JWT_SECRET);
    }
    return false;
  }

  // static async signup(req) {
  //   const res = await checkDuplicateUserName(req.body.username);
  //   if (res) {
  //     return 'Username Already Exists';
  //   }
  //   const user = await models.Users.create({
  //     username: req.body.username,
  //     password: bcrypt.hashSync(req.body.password, 8),
  //     email: req.body.email
  //   });
  //   return user;
  // }
}

module.exports = { Auth };
