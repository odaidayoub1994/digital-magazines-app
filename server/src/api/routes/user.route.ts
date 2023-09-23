import { Router, Request, Response, NextFunction } from "express";
import { errorHandlingWrapper } from "../middleware/errorHandlingMiddleware";
import userController from "../../controllers/user.controller";
import { auth } from "../middleware/auth";

const router = Router();

router.get(
  "/get_users",
  auth,
  errorHandlingWrapper(
    async (req: Request, res: Response, next: NextFunction) => {
      const users = await userController.getUsers();

      res.json(users);
    }
  )
);

export default router;
