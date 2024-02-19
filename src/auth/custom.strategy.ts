import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';

@Injectable()
export class CustomStrategy extends PassportStrategy(BasicStrategy) {
  validate(username: string, password: string) {
    // Future: Query Username and Password from DB
    if (username === 'user1' && password === 'password') {
      return { username };
    }
    throw new UnauthorizedException();
  }
}
