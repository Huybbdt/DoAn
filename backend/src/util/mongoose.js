module.exports =  { 
    mutipleMongooseToOject: function (mongooseArray) {
        return mongooseArray.map(mongoose => mongoose.toObject());
    },
    mongooseToOject: function (mongoose) {
        return mongoose.toObject();
    }
};