import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
  constructor(private userService: UsersService) {
    this.bootstrap();
  }

  async bootstrap() {
    // const users = Array.from({ length: 10 }, () => generateUser());
    // await Promise.all(
    //   users.map(async (userData) => {
    //     await this.userService.create(userData);
    //   }),
    // );
  }
}
