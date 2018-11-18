import User from './user.model';

export default {

    async createUser (req, res) {

        try {
            
            const user = await User.create(req.body);
            return res.send({ status: 'SUCCESS', data: user });
        } catch (error) {
            
            return res.status(500).send(error);
        }
    }
}