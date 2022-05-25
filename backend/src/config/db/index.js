const mongoose = require('mongoose');
async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/qlktx',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected');
  } catch (error) {
    console.log('failed');
  }
}

module.exports = connectDB();
