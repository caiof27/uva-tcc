import { badRequest, ok } from "../../helpers/http-helper";

import { MissingParamError } from "../../errors/index";
import { Controller, HttpRequest } from "../../protocols";
import { TaskPost } from "../../../domain/usecases/task/task-post";
export class TaskPostController implements Controller {
  private readonly taskPost: TaskPost;
  constructor(taskPost: TaskPost) {
    this.taskPost = taskPost;
  }
  async handle(httpRequest: HttpRequest): Promise<any> {
    const requireFields = ["title", "description","createdBy"];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { title, description, createdBy } = httpRequest.body;

    const task = await this.taskPost.post({
      title, 
      description, 
      createdBy,
      status: 1
    });

    return ok(task);
  }
}
