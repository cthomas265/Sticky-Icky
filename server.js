const express = require('express');
const htmlRoutes = require('./routes/htmlroutes')
const apiRoutes = require('./routes/apiroutes')

const PORT = process.env.PORT || 3001;   //process.env - allow to use server like heroku or use 3001
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use('/api', apiRoutes)

app.use('/', htmlRoutes) // '/' used as empty endpoint. in URL link / is waiting for next step


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});