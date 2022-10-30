import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeFollowUpGetAllController } from "../factories/followup/followup-getAll";
import { makeFollowUpGetOneController } from "../factories/followup/followup-getOne";
import { makeFollowUpPostController } from "../factories/followup/followup-post";



export default (router: Router): void => {
  router.post("/:token/followups/create/:id",adaptRoute(makeFollowUpPostController()));
  router.get("/:token/followups/:id",adaptRoute(makeFollowUpGetAllController()));
  router.get("/:token/followups/read/:id",adaptRoute(makeFollowUpGetOneController()));
};
