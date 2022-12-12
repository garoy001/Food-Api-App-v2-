const express = require('express');
const foodRoute = require('./App/Routes/foodRouter');

require('./Database/config')();
const port = process.env.PORT || 4000;
const app = express();
app.set('views', __dirname + '/WebViews');
app.use(express.static('./WebViews/assets'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/foods', foodRoute);

app.listen(port, () => {
	console.log(`listening on ${port}`);
});
