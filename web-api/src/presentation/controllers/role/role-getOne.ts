import { RoleGetOne } from "../../../domain/usecases/role/role-getOne";
import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class RoleGetOneController implements Controller {
  private readonly roleGetOne: RoleGetOne;

  constructor(roleGetOne: RoleGetOne) {
    this.roleGetOne = roleGetOne;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const id = httpRequest.params["id"];

    const role = await this.roleGetOne.getOne(id);

    return ok(role);
  }
}
