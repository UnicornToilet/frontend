let express = require('express');
let morgan = require('morgan');

let app = express();

let PORT = process.env.PORT || 8080;

app.use(morgan('common'));

app.use(express.static(`${__dirname}/build`));
app.use('*', (req,res) => res.send(`${__dirname}/build/index.html`));

app.listen(PORT, () => {
  console.log('Server up on port', PORT);
});
