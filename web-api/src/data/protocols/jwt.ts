import { UserModel } from "../../domain/models/user";

export interface token {
    sign(user: UserModel): any;
    decode(token:string): any;
  }
  