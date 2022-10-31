import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeTaskGetController } from "../factories/task/task-getAll";
import { makeTaskGetOneController } from "../factories/task/task-getOne";
import { makeTaskPostController } from "../factories/task/task-post";
import { makeTaskPutController } from "../factories/task/task-put";

export default (router: Router): void => {
  router.post("/:token/tasks/create",adaptRoute(makeTaskPostController()));
  router.get("/:token/tasks",adaptRoute(makeTaskGetController()));
  router.get("/:token/tasks/:idTask",adaptRoute(makeTaskGetOneController()));
  router.put("/:token/tasks/update/:idTask",adaptRoute(makeTaskPutController()));
};
