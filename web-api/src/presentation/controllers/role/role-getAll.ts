import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { RoleGetAll } from "../../../domain/usecases/role/role-getAll";

export class RoleGetAllController implements Controller {
  private readonly roleGetAll: RoleGetAll;
  constructor(roleGetAll: RoleGetAll) {
    this.roleGetAll = roleGetAll;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
      const token = httpRequest.params["token"];

      const role = await this.roleGetAll.getAll();

      return ok({role,token});
  }
}
