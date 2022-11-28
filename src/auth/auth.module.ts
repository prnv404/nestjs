import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
   imports: [
      JwtModule.register({
         secret: 'pranavSecret',
         signOptions: { expiresIn: '1d' },
      }),
   ],
   providers: [AuthService],
})
export class AuthModule {}
