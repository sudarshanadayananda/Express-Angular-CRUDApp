import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export default {

    connect() {
        mongoose.connect('mongodb://localhost/express_crud', { useNewUrlParser: true });
    }
}