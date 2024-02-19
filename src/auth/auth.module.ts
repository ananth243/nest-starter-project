import { Module } from '@nestjs/common';
import { CustomStrategy } from './custom.strategy';
import { AuthGuard } from './auth.guard';

@Module({
  providers: [CustomStrategy, AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
