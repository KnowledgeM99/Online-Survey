const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const routesUrls = require('./routes/Credentialsroute');
const loginroutes_Urls = require('./routes/Credentialsroute');
const feedback = require('./routes/MySurveyroute');
const surveyList = require('./routes/MySurveyroute');

dotenv.config()

mongoose.connect('mongodb+srv://knowledgemongoe:rC567vImExHzmifB@survey.yplm1us.mongodb.net/SurveyDB?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {
console.log('Connected to MongoDB');
})
.catch((error) => {
console.error('Error connecting to MongoDB:', error);
});

app.use(cookieParser());
app.use(express.json())
app.use(cors())

app.use('/app', routesUrls)
app.use('/app', loginroutes_Urls)
app.use('/app', feedback);
app.get('/app', surveyList);


app.listen(4000, ()=> console.log("server is up and running"))
