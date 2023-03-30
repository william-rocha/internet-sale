import { Test, TestingModule } from '@nestjs/testing';
import { InternetPlanService } from './internet-plan.service';

describe('InternetPlanService', () => {
  let service: InternetPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternetPlanService],
    }).compile();

    service = module.get<InternetPlanService>(InternetPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
