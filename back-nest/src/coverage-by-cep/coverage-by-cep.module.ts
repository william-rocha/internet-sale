import { Module } from '@nestjs/common';
import { CoverageByCepService } from './coverage-by-cep.service';
import { CoverageByCepController } from './coverage-by-cep.controller';
import { CoverageByCep } from './entities/coverage-by-cep.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CoverageByCep])],
  controllers: [CoverageByCepController],
  providers: [CoverageByCepService],
})
export class CoverageByCepModule {}
