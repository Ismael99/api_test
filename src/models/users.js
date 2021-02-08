import {Schema, model} from 'mongoose';

const schema = new Schema({
    user_first_name: {
        type: String,
        require: true,
    },
    user_last_name:{
        type: String,
        require: true,
    },
    user_age:{
        type: Number,
        require: true,
    },
    
})

export default model('User', schema);