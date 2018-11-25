import User from './user.model';

export default {

    // Create a user
    async createUser (req, res) {

        try {

            const foundUser = await User.findOne({email: req.body.email});
            if (!foundUser) {

                const user = await User.create(req.body);
                return res.send({ status: 'OK', message: 'CREATED', data: user });
            } else {

                return res.send({ status: 'OK', message: 'EXISTS' });
            }
        } catch (error) {
            
            return res.status(500).send(error);
        }
    },

    // Get all users
    async findUsers (req, res) {

        try {
            
            const users = await User.find();
            return res.send({ status: 'OK', message: 'SUCCESS', data: users });
        } catch (error) {
            
            return res.status(500).send(error);
        }
    }
}