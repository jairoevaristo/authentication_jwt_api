import 'dotenv/config';
import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(402).send('Token not provider');
        }

        const [, token] = authorization.split(' ');

        const payload = await jwt.verify(token, process.env.SECRET_KEY);

        req.userId = payload.userId;

        next();

    } catch(err) {
        return res.status(401).send('Unauthorized');
    }
}