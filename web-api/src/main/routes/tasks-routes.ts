import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeTaskGetController } from "../factories/task/task-getAll";
import { makeTaskGetOneController } from "../factories/task/task-getOne";
import { makeTaskPostController } from "../factories/task/task-post";


export default (router: Router): void => {
  router.post("/tasks/create",adaptRoute(makeTaskPostController()));
  router.get("/tasks",adaptRoute(makeTaskGetController()));
  router.get("/tasks/:id",adaptRoute(makeTaskGetOneController()));
};
