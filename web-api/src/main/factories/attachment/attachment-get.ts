
import { AttachmentGetController } from "../../../presentation/controllers/Attachment/attachment-get";
import { Controller } from "../../../presentation/protocols";

export const makeAttachmentGetController = (): Controller =>{
    return new AttachmentGetController();
}