import User from './user.model';

export default {

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
    }
}