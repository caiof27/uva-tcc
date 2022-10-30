import { Controller, HttpRequest, HttpResponse,  } from "../../protocols";
import { ok } from "../../helpers/http-helper";
import { RolePut } from "../../../domain/usecases/role/role-put";
import { RoleGetOne } from "../../../domain/usecases/role/role-getOne";
export class RolePutController implements Controller {
  private readonly rolePut: RolePut;
  private readonly roleGetOne: RoleGetOne
  constructor(rolePut: RolePut, roleGetOne: RoleGetOne) {
    this.rolePut = rolePut;
    this.roleGetOne = roleGetOne
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const id = httpRequest.params["id"];
    const token = httpRequest.params["token"];

    const body = httpRequest.body;

    await this.rolePut.put(body,id);

    const role = await this.roleGetOne.getOne(id);

    return ok({role,token})
  }
}
