import { Injectable } from '@nestjs/common';
import { AuthPayLoadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUser=[
    {
        id:1,
        username: "Abdellah",
        password: "password",
    },
    {
        id:2,
        username:"Aisha",
        password: "password123"
    }
]
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  validateUser(userName: string, password: string) {
    const findUser = fakeUser.find((user) => user.username === userName);
    if (!findUser) return null;

    // Correct comparison
    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return user; // Return user, NOT JWT
    }

    return null;
  }

 login(user: any) {
  return {
    access_token: this.jwtService.sign({
      sub: user.id,
      username: user.username,
    }),
  };
}

  }

