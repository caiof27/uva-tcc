import { AttachmentPutController } from "../../../presentation/controllers/Attachment/attachment-put";
import { Controller } from "../../../presentation/protocols";

export const makeAttachmentPutController = (): Controller =>{
    return new AttachmentPutController();
}