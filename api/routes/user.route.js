// user.route.js

import express from 'express';
import {test} from '../controllers/user.controller.js'; // Import without curly braces

const userRouter = express.Router();

userRouter.get('/test', test);

export default userRouter;
