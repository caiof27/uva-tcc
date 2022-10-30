import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeRoleDeleteController } from "../factories/role/role-delete";
import { makeRoleGetAllController } from "../factories/role/role-getAll";
import { makeRoleGetOneController } from "../factories/role/role-getOne";
import { makeRolePostController } from "../factories/role/role-post";
import { makeRolePutController } from "../factories/role/role-put";

export default (router: Router): void => {
  router.post("/:token/roles/create",adaptRoute(makeRolePostController()));
  router.get("/:token/roles",adaptRoute(makeRoleGetAllController()));
  router.get("/:token/roles/:id",adaptRoute(makeRoleGetOneController()));
  router.delete("/:token/roles/delete/:id",adaptRoute(makeRoleDeleteController()));
  router.put("/:token/roles/update/:id",adaptRoute(makeRolePutController()));
};
