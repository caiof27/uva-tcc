import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeFollowUpGetAllController } from "../factories/followup/followup-getAll";
import { makeFollowUpGetOneController } from "../factories/followup/followup-getOne";
import { makeFollowUpPostController } from "../factories/followup/followup-post";



export default (router: Router): void => {
  router.post("/followup/create",adaptRoute(makeFollowUpPostController()));
  router.get("/followup",adaptRoute(makeFollowUpGetAllController()));
  router.get("/followup/:id",adaptRoute(makeFollowUpGetOneController()));
};
