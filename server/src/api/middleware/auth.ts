import { Request, Response, NextFunction } from "express";
import { JWTUtils } from "../../utils/jwt-utils";

export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  // Ensure the token starts with "Bearer"
  if (!token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Invalid token format." });
  }

  const tokenHash = token.split(" ")[1];

  try {
    const isValidToken = JWTUtils.verifyAccessToken(tokenHash);

    if (!isValidToken) {
      return res.status(401).json({ message: "Invalid token." });
    }

    next();
  } catch (err: any) {
    return res
      .status(401)
      .json({ message: "Token verification failed.", error: err.message });
  }
}
