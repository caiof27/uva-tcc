import { AttachmentPostController } from "../../../presentation/controllers/Attachment/attachment-post";
import { Controller } from "../../../presentation/protocols";

export const makeAttachmentPostController = (): Controller =>{
    return new AttachmentPostController();
}