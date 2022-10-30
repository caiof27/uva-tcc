import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const jwt_middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(res.getHeaders())
    next()
};

