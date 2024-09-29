import { verify } from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) return res.status(403).send("Accès refusé.");

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Token invalide.");
  }
}
