import { Encrypter } from "../../data/protocols/encrypter";
import bcrypt from "bcrypt";

export class BcryptAdapter implements Encrypter {
  private readonly salt: number = 12;
  constructor() {}
  async encrypt(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt);
    return hash;
  }
  async compare(value: string,hashed_value:string): Promise<boolean>{
    const hash = await bcrypt.compare(value,hashed_value);
    return hash;
  }
}
