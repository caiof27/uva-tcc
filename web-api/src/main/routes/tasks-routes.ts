import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeTaskGetController } from "../factories/task/task-get";
import { makeTaskGetOneController } from "../factories/task/task-getOne";
import { makeTaskPostController } from "../factories/task/task-post";
import { makeTaskPatchController } from "../factories/task/task-put";


export default (router: Router): void => {
  router.post("/tasks/create",adaptRoute(makeTaskPostController()));
  router.get("/tasks",adaptRoute(makeTaskGetController()));
  router.get("/tasks/:id",adaptRoute(makeTaskGetOneController()));
  router.patch("/tasks/update/:id",adaptRoute(makeTaskPatchController()));
};
