let express = require('express');
let morgan = require('morgan');

let app = express();

app.use(morgan('common'));

app.use(express.static(`${__dirname}/build`));
app.use('*', (req,res) => res.send(`${__dirname}/build/index.html`));

app.listen(process.env.PORT, () => {
    console.log("Server up on port", process.env.PORT);
});
