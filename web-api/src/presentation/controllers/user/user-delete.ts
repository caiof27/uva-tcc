import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { UserDelete } from "../../../domain/usecases/user/user-delete";

export class UserDeleteController implements Controller {
  private readonly userDelete: UserDelete;
  constructor(userDelete: UserDelete) {
    this.userDelete = userDelete;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const id = httpRequest.params["id"];
    const token = httpRequest.params["token"];

    const user = await this.userDelete.delete(id);

    return ok({user,token});
  }
}
