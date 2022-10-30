import { token } from "../../data/protocols/jwt";
import { UserModel } from "../../domain/models/user";
import jwt from "jsonwebtoken";

export class JwtAdapter implements token {
  constructor() {}
    sign(user: UserModel): string {
        const {id,name,username,role_id} = user
        return jwt.sign({id,name,username,role_id},"JWT_KEY");
    }
    decode(token: string): any {
        return jwt.decode(token);
    }
  
}
