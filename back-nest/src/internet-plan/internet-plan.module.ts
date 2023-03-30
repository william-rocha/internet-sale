import { InternetPlan } from './entities/internet-plan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { InternetPlanService } from './internet-plan.service';
import { InternetPlanController } from './internet-plan.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InternetPlan])],
  controllers: [InternetPlanController],
  providers: [InternetPlanService],
})
export class InternetPlanModule {}
