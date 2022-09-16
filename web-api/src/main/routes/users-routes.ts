import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeUserDeleteController } from "../factories/user/user-delete";
import { makeUserGetController } from "../factories/user/user-get";
import { makeUserGetOneController } from "../factories/user/user-getOne";
import { makeUserPostController } from "../factories/user/user-post";
import { makeUserPutController } from "../factories/user/user-put";

export default (router: Router): void => {
  router.post("/users/create",adaptRoute(makeUserPostController()));
  router.get("/users",adaptRoute(makeUserGetController()));
  router.get("/users/:id",adaptRoute(makeUserGetOneController()));
  router.delete("/users/delete/:id",adaptRoute(makeUserDeleteController()));
  router.put("/users/update/:id",adaptRoute(makeUserPutController()));
};
