import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeUserDeleteController } from "../factories/user/user-delete";
import { makeUserGetController } from "../factories/user/user-get";
import { makeUserGetOneController } from "../factories/user/user-getOne";
import { makeUserLoginController } from "../factories/user/user-login";
import { makeUserPostController } from "../factories/user/user-post";
import { makeUserPutController } from "../factories/user/user-put";

export default (router: Router): void => {
  router.post("/:token/users/create",adaptRoute(makeUserPostController()));
  router.get("/:token/users",adaptRoute(makeUserGetController()));
  router.get("/:token/users/:id",adaptRoute(makeUserGetOneController()));
  router.delete("/:token/users/delete/:id",adaptRoute(makeUserDeleteController()));
  router.put("/:token/users/update/:id",adaptRoute(makeUserPutController()));
  router.post("/login",adaptRoute(makeUserLoginController()))
};
