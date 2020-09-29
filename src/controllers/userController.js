import User from '../models/User';

class UserController {
    async create(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.create({
                email,
                password,
            });

            const { _id } = user;

            return res.status(201).send({ _id });

        } catch(err) {
            return res.status(400).send('User not Created');
        }
    }
}

export default new UserController;