import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeAttachmentGetController } from "../factories/attachment/attachment-get";
import { makeRoleDeleteController } from "../factories/role/role-delete";
import { makeRoleGetOneController } from "../factories/role/role-getOne";
import { makeRolePostController } from "../factories/role/role-post";
import { makeRolePutController } from "../factories/role/role-put";

export default (router: Router): void => {
  router.post("/roles/create",adaptRoute(makeRolePostController()));
  router.get("/roles",adaptRoute(makeAttachmentGetController()));
  router.get("/roles/:id",adaptRoute(makeRoleGetOneController()));
  router.delete("/roles/delete/:id",adaptRoute(makeRoleDeleteController()));
  router.put("/roles/update/:id",adaptRoute(makeRolePutController()));
};
