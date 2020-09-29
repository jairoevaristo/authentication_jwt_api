import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/api_auth_token', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

mongoose.Promise = global.Promise;