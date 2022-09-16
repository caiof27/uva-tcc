import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeAttachmentDeleteController } from "../factories/attachment/attachment-delete";
import { makeAttachmentGetController } from "../factories/attachment/attachment-get";
import { makeAttachmentGetOneController } from "../factories/attachment/attachment-getOne";
import { makeAttachmentPostController } from "../factories/attachment/attachment-post";
import { makeAttachmentPutController } from "../factories/attachment/attachment-put";



export default (router: Router): void => {
  router.post("/attachment/create",adaptRoute(makeAttachmentPostController()));
  router.get("/attachment",adaptRoute(makeAttachmentGetController()));
  router.get("/attachment/:id",adaptRoute(makeAttachmentGetOneController()));
  router.delete("/attachment/delete/:id",adaptRoute(makeAttachmentDeleteController()));
  router.put("/attachment/update/:id",adaptRoute(makeAttachmentPutController()));
};
