const express = require('express');
const foodRoute = require('./App/Routes/foodRouter');

require('./Database/config')();

const app = express();

app.use('/api/v1/foods', foodRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`listening on ${port}`);
});
