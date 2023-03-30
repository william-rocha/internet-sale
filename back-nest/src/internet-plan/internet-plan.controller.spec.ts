import { Test, TestingModule } from '@nestjs/testing';
import { InternetPlanController } from './internet-plan.controller';
import { InternetPlanService } from './internet-plan.service';

describe('InternetPlanController', () => {
  let controller: InternetPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InternetPlanController],
      providers: [InternetPlanService],
    }).compile();

    controller = module.get<InternetPlanController>(InternetPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
