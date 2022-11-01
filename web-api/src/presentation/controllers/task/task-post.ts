import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError } from "../../errors/index";
import { Controller, HttpRequest } from "../../protocols";
import { TaskPost } from "../../../domain/usecases/task/task-post";
import { token } from "../../../data/protocols/jwt";
export class TaskPostController implements Controller {
  private readonly taskPost: TaskPost;
  private readonly jwt: token;
  constructor(taskPost: TaskPost,jwt:token) {
    this.taskPost = taskPost;
    this.jwt = jwt;
  }
  async handle(httpRequest: HttpRequest): Promise<any> {
    const requireFields = ["title", "description"];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { title, description } = httpRequest.body;
    const token = httpRequest.params["token"];

    const {id} = this.jwt.decode(token);
    
    const user = {
      title, 
      description, 
      createdBy:id,
      status: 1
    }

    const task = await this.taskPost.post(user);

    return ok({task,token});
  }
}
