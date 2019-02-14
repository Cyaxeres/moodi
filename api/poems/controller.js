const poemService = require('../../services/poem');
module.exports = {
  newPoem: (req, res) => poemService.poems_create_poem(req, res),
  viewPoems: (req, res) => poemService.poems_get_all(req, res),
};
