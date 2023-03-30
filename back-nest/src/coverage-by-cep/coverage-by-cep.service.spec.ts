import { Test, TestingModule } from '@nestjs/testing';
import { CoverageByCepService } from './coverage-by-cep.service';

describe('CoverageByCepService', () => {
  let service: CoverageByCepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoverageByCepService],
    }).compile();

    service = module.get<CoverageByCepService>(CoverageByCepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
