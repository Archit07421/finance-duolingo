import { auth } from "../firebaseAdmin.js";

export async function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists
    if (!authHeader) {
      return res.status(401).json({
        error: "Authorization token is required",
      });
    }

    // Expected format:
    // Authorization: Bearer <Firebase ID Token>

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        error: "Invalid authorization format",
      });
    }

    const token = authHeader.split("Bearer ")[1];

    if (!token) {
      return res.status(401).json({
        error: "Token is missing",
      });
    }

    // Verify Firebase ID token
    const decodedToken = await auth.verifyIdToken(token);

    // Store authenticated user information
    req.user = decodedToken;

    // Continue to the protected route
    next();

  } catch (error) {
    console.error("Authentication error:", error);

    return res.status(401).json({
      error: "Invalid or expired authentication token",
    });
  }
}