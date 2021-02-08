import User from '../models/users';

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        }
    }
}

export default resolvers;