import mongoose from 'mongoose';

export const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost/test_api', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect to DataBase');
    } catch (error) {
        console.log(error);
    }
}
