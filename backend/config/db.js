import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export const connect = () => mongoose.connect('mongodb://localhost/express_crud', { useNewUrlParser: true });