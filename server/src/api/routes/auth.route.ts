import { Router, Request, Response, NextFunction } from "express";
import { errorHandlingWrapper } from "../middleware/errorHandlingMiddleware";
import authController from "../../controllers/auth.controller";

const router = Router();

router.post(
  "/signup",
  errorHandlingWrapper(
    async (req: Request, res: Response, next: NextFunction) => {
      const { fullName, email, password, role, is_deleted } = req.body;

      await authController.signup({
        fullName,
        email,
        password,
        role,
        is_deleted
      });

      res.json("Signed up successfully");
    }
  )
);

router.post(
  "/login",
  errorHandlingWrapper(
    async (req: Request, res: Response, next: NextFunction) => {
      const { email, password } = req.body;

      await authController.login(email, password);

      res.json("Signed up successfully");
    }
  )
);

export default router;
