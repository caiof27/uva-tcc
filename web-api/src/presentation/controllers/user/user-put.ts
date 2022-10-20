import { Controller, HttpRequest, HttpResponse} from "../../protocols";
import { UserPut } from "../../../domain/usecases/user/user-put";
import { UserGetOne } from "../../../domain/usecases/user/user-getOne";
import { ok } from "../../helpers/http-helper";

export class UserPutController implements Controller {
  private readonly userPut: UserPut;
  private readonly userGetOne: UserGetOne;
  constructor(userPut: UserPut,userGetOne: UserGetOne) {
    this.userPut = userPut;
    this.userGetOne = userGetOne;
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const id = httpRequest.params["id"];

    const body = httpRequest.body;

    await this.userPut.put(
      body,
      id
    );

    const user = await this.userGetOne.getOne(id);

    return ok(user)
  }
}
