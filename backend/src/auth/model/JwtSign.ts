export class JwtSign {
  userId: string;
  fullname: string;
  email: string;

  constructor(userId: string, fullname: string, email: string) {
    this.userId = userId;
    this.fullname = fullname;
    this.email = email;
  }

  toJSON(): IJwtSignSerialized {
    return {
      userId: this.userId,
      fullname: this.fullname,
      email: this.email,
    };
  }
}

export interface IJwtSignSerialized {
  userId: string;
  fullname: string;
  email: string;
}
