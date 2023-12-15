import express from "express";
import { forgetPasswordController, loginController, registerController, testController } from "../controllers/authController.mjs";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.mjs";

const router = express.Router();
 


// register
router.post('/register', registerController)
//login
router.post('/login', loginController)

//Forget Password

router.post('/forget-password', forgetPasswordController)   

// testing

router.get('/test', requireSignIn,isAdmin, testController )


// secure routing auth

router.get("/user-auth", requireSignIn, (req, res)=>{
    res.status(200).send({
        "ok":true,
    })
})




export default router;

