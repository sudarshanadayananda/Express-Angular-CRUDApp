import express from 'express';
import userController from './user.controller';

export const userRouter = express.Router();

userRouter.route('/')
    .post(userController.createUser);

userRouter.route('/all')
    .get(userController.findUsers);