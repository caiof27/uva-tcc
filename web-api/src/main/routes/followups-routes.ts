import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeFollowUpDeleteController } from "../factories/followup/followup-delete";
import { makeFollowUpGetController } from "../factories/followup/followup-get";
import { makeFollowUpGetOneController } from "../factories/followup/followup-getOne";
import { makeFollowUpPostController } from "../factories/followup/followup-post";
import { makeFollowUpPutController } from "../factories/followup/followup-put";



export default (router: Router): void => {
  router.post("/attachment/create",adaptRoute(makeFollowUpPostController()));
  router.get("/attachment",adaptRoute(makeFollowUpGetController()));
  router.get("/attachment/:id",adaptRoute(makeFollowUpGetOneController()));
  router.delete("/attachment/delete/:id",adaptRoute(makeFollowUpDeleteController()));
  router.put("/attachment/update/:id",adaptRoute(makeFollowUpPutController()));
};
