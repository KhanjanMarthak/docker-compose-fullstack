const { Auth: AuthService } = require('../../services/index.js');

class Auth {
  static async signup(req, res) {
    res.json({ user: await AuthService.signup(req) });
  }

  static async login(req, res) {
    const token = await AuthService.login(req);
    if (token) {
      res.status(200).json({ msg: token });
    } else res.status(401).json({ msg: 'Invalid Credentials' });
  }
}

module.exports = { Auth };
