import { Controller, HttpRequest} from "../../protocols";
import { UserPut } from "../../../domain/usecases/user/user-put";

export class UserPutController implements Controller {
  private readonly userPut: UserPut;
  constructor(userPut: UserPut) {
    this.userPut = userPut;
  }
  async handle(httpRequest: HttpRequest): Promise<any> {

    const id = httpRequest.params["id"];

    let user = httpRequest.body;

    await this.userPut.put(
      user,
      id
    );

  }
}
