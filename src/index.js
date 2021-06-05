const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();
app.listen(process.env.PORT);

console.log(`App escuchando en http://localhost:${process.env.PORT}`);
