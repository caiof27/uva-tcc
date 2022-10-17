import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError} from "../../errors/index";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { UserPut } from "../../../domain/usecases/user/user-put";

export class UserPutController implements Controller {
  private readonly userPut: UserPut;
  constructor(userPut: UserPut) {
    this.userPut = userPut;
  }
  async handle(httpRequest: HttpRequest): Promise<any> {
    const requireFields = ["name", "price"];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const id = httpRequest.params["id"];

    let user = httpRequest.body;

    await this.userPut.put(
      user,
      id
    );

  }
}
