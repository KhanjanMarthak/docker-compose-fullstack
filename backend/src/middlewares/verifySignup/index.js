const models = require('../../../models');

const checkDuplicateUserName = async (username) => {
  const user = await models.User.findOne({
    where: { username }
  });

  if (user) {
    return true;
  }
  return false;
};

export { checkDuplicateUserName };
