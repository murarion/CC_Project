// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/backend', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Database Connected!'))
// .catch(err => console.error('Error connecting to MongoDB:', err));

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database Connected!'))
.catch(err => console.error('Error connecting to MongoDB:', err));