import { UserGetOne } from "../../../domain/usecases/user/user-getOne";
import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class UserGetOneController implements Controller {
  private readonly userGetOne: UserGetOne;

  constructor(userGetOne: UserGetOne) {
    this.userGetOne = userGetOne;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const id = httpRequest.params["id"];

    const user = await this.userGetOne.getOne(id);

    return ok(user);
  }
}
