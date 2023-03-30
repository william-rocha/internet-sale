import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoverageByCep } from './entities/coverage-by-cep.entity';

@Injectable()
export class CoverageByCepService {
  constructor(
    @InjectRepository(CoverageByCep)
    private readonly coverageByCepRepository: Repository<CoverageByCep>,
  ) {}

  async findByCep(cep: string): Promise<CoverageByCep> {
    try {
      const cepEntity = await this.coverageByCepRepository.findOneOrFail({
        where: { cep: cep },
      });
      return cepEntity;
    } catch (error) {
      throw new Error('CEP inválido');
    }
  }
}
