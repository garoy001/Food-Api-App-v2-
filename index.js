const express = require('express');
const foodRoute = require('./App/Routes/foodRouter');
const foodsShowRoute = require('./App/Routes/foodShowRouter');
const specificFood = require('./App/Routes/specificFood');
require('./Database/config')();
const port = process.env.PORT || 4000;
const app = express();
app.set('views', __dirname + '/WebViews');
app.use(express.static('./WebViews/assets'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
	res.redirect('/api/v1/foods');
});
app.use('/api/v1/foods', foodRoute);
app.use('/api/v1/AllFoods', foodsShowRoute);
app.use('/api/v1/Food', specificFood);

app.listen(port, () => {
	console.log(`listening on ${port}`);
});
