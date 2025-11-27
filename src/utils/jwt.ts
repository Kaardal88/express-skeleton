//In here you import jwt from jsonwebtoken and create functions to sign and verify tokens using a secret key from environment variables.

//DELETE THIS FILE IF YOU DON'T NEED JWT AUTHENTICATION!

// Example:function getJwtSecret(): string {
/*  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is required");
  }
  return secret;
}

const JWT_SECRET = getJwtSecret();

export function generateToken(userId: number) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "24h" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: number };
  } catch (error) {
    return null;
  }
} */
