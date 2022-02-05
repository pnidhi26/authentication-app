import { Injectable } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { UserService } from  '../user/user.service';
import { UserR } from  '../user.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }


private async validate(userData: UserR): Promise<UserR> {
    return await this.userService.findByEmail(userData.email);
}

public async login(user: UserR): Promise< any | { status: number }>{
    return this.validate(user).then((userData)=>{
      if(!userData){
        return { status: 404 };
      }
      let payload = `${userData.name}`;
      const accessToken = this.jwtService.sign(payload);

      return {
         expires_in: 3600,
         access_token: accessToken,
         user_id: payload,
         status: 200
      };

    });
}

public async register(user: UserR): Promise<any>{
    return this.userService.create(user)
} 

}