import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) return res.status(401).json({ error: 'Token not found' });

  const [, token] = auth.split(' ');

  try {
    await promisify(jwt.verify)(token, authConfig.secret);
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  return next();
};
