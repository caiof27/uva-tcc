import { Controller, HttpRequest,  } from "../../protocols";
import { RolePut } from "../../../domain/usecases/role/role-put";
export class RolePutController implements Controller {
  private readonly rolePut: RolePut;
  constructor(rolePut: RolePut) {
    this.rolePut = rolePut;
  }
  async handle(httpRequest: HttpRequest): Promise<any> {

    const id = httpRequest.params["id"];

    const body = httpRequest.body;

    await this.rolePut.put(body,id);

  }
}
