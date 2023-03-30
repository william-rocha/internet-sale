import { Test, TestingModule } from '@nestjs/testing';
import { CoverageByCepController } from './coverage-by-cep.controller';
import { CoverageByCepService } from './coverage-by-cep.service';

describe('CoverageByCepController', () => {
  let controller: CoverageByCepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoverageByCepController],
      providers: [CoverageByCepService],
    }).compile();

    controller = module.get<CoverageByCepController>(CoverageByCepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
