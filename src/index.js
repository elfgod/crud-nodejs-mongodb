require('dotenv').config();
PORT = 4000;

const app = require('./server');

app.listen(app.get('PORT'), () => {
    console.log(`Server running on PORT:`, app.get('PORT'));
})