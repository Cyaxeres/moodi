const Poem = require('../models/Poem');

module.exports = {
  poems_get_all: (req, res) => {
    Poem.find()
      .sort({ date: -1 })
      .then(poems => res.json(poems))
      .catch(err => res.status(404).json({ message: 'No Poems found', error: err.message }));
  },
  poems_create_poem: (req, res) => {
    const {
      body: { title, text },
      // user: { id },
    } = req;
    const newPoem = new Poem({
      title,
      text,
      // author: id,
    });
    newPoem
      .save()
      .then(poem => {
        res.json(poem);
      })
      .catch(err =>
        res.status(400).json({
          message: 'Poem creation failed',
          error: err.message,
        })
      );
  },
};
