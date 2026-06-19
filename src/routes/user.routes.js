import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; 
// 👇 Ye import miss tha, isay add karo (apne folder structure ke hisab se path dekh lena)
import { upload } from "../middlewares/multer.middleware.js"; 

const router = Router();

router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ]),
    registerUser
);

export default router;