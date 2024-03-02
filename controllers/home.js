const middleware = require('../middleware')

module.exports = {
  index
}

//find all users
async function index(req, res) {
  console.log('hiiiii')
  res.send('connected')
}
