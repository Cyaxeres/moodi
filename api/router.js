const postRouter = require('./posts/routes');
const poemRouter = require('./poems/routes');

module.exports = server => {
  server.use('/posts', postRouter);
  server.use('/poems', poemRouter);
};
