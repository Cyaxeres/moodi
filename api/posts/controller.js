const photoService = require('../../services/photo');
module.exports = {
  newPost: (req, res) => photoService.getRandomPhoto(req, res),
};
