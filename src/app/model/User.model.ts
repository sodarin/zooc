export class User {
  constructor(
    public username: string,
    public password: string,
    public email: string,
    public telephone: string,
    public avatar_url?: string,
    public id?: string
  ){}
}
