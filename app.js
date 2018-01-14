let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let controller = require('./controller');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.route('/snacks')
  .get(controller.getAllSnacks)
  .post(controller.createSnack);

app.route('/snacks/:id')
  .get(controller.getSnack)
  .put(controller.updateSnack)
  .delete(controller.deleteSnack);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ...`)
});
