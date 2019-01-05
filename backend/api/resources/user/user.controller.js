import User from './user.model';

const EXISTS = 'EXISTS';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const NOT_FOUND = 'NOT_FOUND';

export default {

    // Create a user
    async createUser (req, res) {

        try {

            const foundUser = await User.findOne({ email: req.body.email });
            if (!foundUser) {

                const user = await User.create(req.body);
                return res.send({ message: SUCCESS, data: user });
            } else {

                return res.send({ message: EXISTS });
            }
        } catch (error) {
            
            return res.status(500).send(error);
        }
    },

    // Get all users
    async findUsers (req, res) {

        try {
            
            const users = await User.find();
            return res.send({ message: SUCCESS, data: users });
        } catch (error) {
            
            return res.status(500).send(error);
        }
    },

    // Find user by Id
    async findUser(req, res) {

        try {

            const foundUser = await User.findOne({ _id: req.query.id });
            if (foundUser) {

                return res.send({ message: SUCCESS, data: foundUser });
            } else {
                return res.send({ message: NOT_FOUND });
            }
        } catch (error) {

            return res.status(500).send(error);
        }
    }
}