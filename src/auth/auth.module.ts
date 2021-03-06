import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserR } from './user.entity';
import { UserService } from './user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UserR]),
    JwtModule.register({
        secretOrPrivateKey: 'secret12356789'
    })
    ],
    providers: [UserService, AuthService],
    controllers: [AuthController]
})
export class AuthModule { }