import 'dotenv/config';
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';

import User from '../models/User';

class UserController {
    async list(req, res) {
        try {
            const user = await User.find({});

            const userActive = await User.findById(req.userId);

            return res.status(200).send({  userActive: userActive.email, data: user });

        } catch(err) {
            return res.status(400).send('Not List')
        }
    }
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
    async authenticated(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).send('User not found');
            }

            const passwordCorreted = await bcrypt.compare(password, user.passwordHash);

            if (!passwordCorreted) {
                return res.status(402).send('Invalid password');
            }

            return res.json({
                token: jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
                    expiresIn: '2d',
                })
            });

        } catch(err) {
            return res.status(400).send('Error');
        }
    }
}

export default new UserController;