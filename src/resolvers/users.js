import User from '../models/users';

const resolvers = {
    Query:{
        users: async () => {
             await console.log(User.find());
            return await User.find();

        }
    },
    Mutation: {
        createUser: async (_, {input}) =>{
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        updateUser: async (_, {_id, input} ) =>{
            return await User.findByIdAndUpdate(_id, input, {new: true});       
        },
        //Eliminado logico, añadir estado del registo y en el get deben de mostrarse solo los activos
        deleteUser: async(_ , {_id}) =>{
            return await User.findByIdAndDelete(_id);
        }
    }

}

export default resolvers;