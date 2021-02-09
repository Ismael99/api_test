import {Schema, model} from 'mongoose';

const schema = new Schema({
    user_first_name: {
        type: String,
        required: true,
    },
    user_last_name:{
        type: String,
        required: true,
    },
    user_age:{
        type: Number,
        required: true,
    },
    
})

export default model('User', schema);