import { AttachmentGetOneController } from "../../../presentation/controllers/Attachment/attachment-getOne";
import { Controller } from "../../../presentation/protocols";

export const makeAttachmentGetOneController = (): Controller =>{
    return new AttachmentGetOneController();
}