import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoles } from './domain/entities/user_roles.entity';
import { UserRolesService } from './user_roles.service';
import { UserRolesController } from './user_roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoles])],
  controllers: [UserRolesController],
  providers: [UserRolesService],
})
export class UserRolesModule {}
