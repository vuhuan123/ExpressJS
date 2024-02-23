function mutipleMongooseToObject(mongooses) {
    return mongooses.map(mongoose => mongoose.toObject());
}

function MongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}

export { mutipleMongooseToObject, MongooseToObject }