/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { ClientError } from './client-error.js';

interface PayLoad extends JwtPayload {
  userId: number;
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const auth = req.get('authorization');
  const token = auth?.split('Bearer ')[1];
  const secretToken = process.env.TOKEN_SECRET;
  if (!secretToken) throw new ClientError(401, 'Auth failed');
  if (!auth || !token) {
    throw new ClientError(401, 'Auth required');
  }
  jwt.verify(token, secretToken, (err, decoded) => {
    if (err) {
      throw new ClientError(401, 'Auth required');
    }
    const payload = decoded as PayLoad;
    req.user = payload;
    next();
  });
  /* your code here */
}

/*
 * Get the 'Authorization' header from the request.
 * Parse the token from the header; e.g., auth.split('Bearer ')[1]
 * If no header or no token is provided,
 *   throw a 401 error with the message 'authentication required'
 * Use jwt.verify() to verify the authenticity of the token and extract its payload.
 * Assign the extracted payload to the user property of the req object.
 * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
 *
 * References:
 * https://expressjs.com/en/4x/api.html#req.get
 * https://nodejs.org/api/http.html#http_message_headers
 * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
