import express from 'express';
import userController from './user.controller';

export const userRouter = express.Router();

userRouter.route('/')
    .get(userController.findUser)
    .post(userController.createUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

userRouter.route('/all')
    .get(userController.findUsers);