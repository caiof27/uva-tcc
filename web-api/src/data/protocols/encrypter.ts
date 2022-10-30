export interface Encrypter {
  encrypt(value: string): Promise<string>;
  compare(value:string,hashed_value:string):Promise<boolean>;
}
