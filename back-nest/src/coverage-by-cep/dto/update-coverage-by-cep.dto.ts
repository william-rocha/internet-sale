import { PartialType } from '@nestjs/mapped-types';
import { CreateCoverageByCepDto } from './create-coverage-by-cep.dto';

export class UpdateCoverageByCepDto extends PartialType(CreateCoverageByCepDto) {}
