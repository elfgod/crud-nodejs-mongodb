const mongoose = require('mongoose');

const ALIEN_JOBS_MONGODB_HOST = process.env.ALIEN_JOBS_MONGODB_HOST;
const ALIEN_JOBS_MONGODB_DATABASE = process.env.ALIEN_JOBS_MONGODB_DATABASE;
const MONGODB_URI = `mongodb://${ALIEN_JOBS_MONGODB_HOST}/${ALIEN_JOBS_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true    
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));