import { authentication, badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError } from "../../errors/index";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { UserLogin } from "../../../domain/usecases/user/user-login";
import { token } from "../../../data/protocols/jwt";

export class UserLoginController implements Controller {
  private readonly userLogin: UserLogin;
  private readonly jwt: token;
  constructor(userLogin: UserLogin,jwt: token) {
    this.userLogin = userLogin;
    this.jwt = jwt;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requireFields = ["username","password"];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { username, password } = httpRequest.body;

    let user = await this.userLogin.login(
      username,
      password
    );


    if(user){
      const token = this.jwt.sign(user);
      return ok({user,token});
    }else{
      return authentication({name:"Autenticação",message:"Falha na Autenticação"});
    }
    
  }
}
