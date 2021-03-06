// require('./seeds')(`5d69738cb369ee1398c020fd`, null, true);
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const setRoutes = require('./routes');

const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use(cors());
setRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started`));

module.exports = app;
