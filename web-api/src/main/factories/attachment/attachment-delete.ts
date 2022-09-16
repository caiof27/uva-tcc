import { AttachmentDeleteController } from "../../../presentation/controllers/Attachment/attachment-delete";
import { Controller } from "../../../presentation/protocols";

export const makeAttachmentDeleteController = (): Controller =>{
    return new AttachmentDeleteController();
}