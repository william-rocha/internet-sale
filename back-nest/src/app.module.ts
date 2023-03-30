import { InternetPlan } from './internet-plan/entities/internet-plan.entity';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { CoverageByCepModule } from './coverage-by-cep/coverage-by-cep.module';
import { CoverageByCep } from './coverage-by-cep/entities/coverage-by-cep.entity';
import { InternetPlanModule } from './internet-plan/internet-plan.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '123',
      database: process.env.DB_DATABASE || 'sempre',
      entities: [User, CoverageByCep, InternetPlan],
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([User, CoverageByCep, InternetPlan]),
    UsersModule,
    CoverageByCepModule,
    InternetPlanModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
