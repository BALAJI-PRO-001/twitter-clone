import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller';


const router = express.Router();

router.post('signup', signup)
      .post('/login', login);

router.get('/logout', logout);

export default router;