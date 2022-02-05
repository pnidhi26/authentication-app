import { Controller, Post, Body } from  '@nestjs/common';
import { AuthService } from  './auth.service';
import { UserR } from  '../user.entity';

@Controller('auth')
export  class  AuthController {
    constructor(private  readonly  authService:  AuthService) {}

@Post('login')
async login(@Body() user: UserR): Promise<any> {
  return this.authService.login(user);
}  

}
