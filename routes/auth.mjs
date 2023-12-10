import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.mjs";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.mjs";

const router = express.Router();
 


// register
router.post('/register', registerController)
//login
router.post('/login', loginController)

// testing

router.get('/test', requireSignIn,isAdmin, testController )


export default router;

