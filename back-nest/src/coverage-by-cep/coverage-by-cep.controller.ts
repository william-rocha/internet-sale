import { Controller, Get, Param } from '@nestjs/common';
import { CoverageByCepService } from './coverage-by-cep.service';
import { CoverageByCep } from './entities/coverage-by-cep.entity';

@Controller('coverage-by-cep')
export class CoverageByCepController {
  constructor(private readonly coverageByCepService: CoverageByCepService) {}

  @Get(':cep')
  async findByCep(@Param('cep') cep: string): Promise<CoverageByCep> {
    return this.coverageByCepService.findByCep(cep);
  }
}
