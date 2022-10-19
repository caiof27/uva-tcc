import { RoleDelete } from "../../../domain/usecases/role/role-delete";
import { ok } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class RoleDeleteController implements Controller {
  private readonly roleDelete: RoleDelete;
  constructor(roleDelete: RoleDelete) {
    this.roleDelete = roleDelete;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const id = httpRequest.params["id"];

    const role = await this.roleDelete.delete(id);

    return ok(role);
  }
}
