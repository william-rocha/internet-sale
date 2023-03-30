import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  cpf: string;

  @IsOptional()
  @IsString()
  rg: string;

  @IsOptional()
  @IsDateString()
  data_nascimento: string;

  @IsOptional()
  @IsString()
  telefone: string;

  @IsOptional()
  @IsString()
  telefone_secundario: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  endereco: string;

  @IsOptional()
  @IsString()
  bairro: string;

  @IsOptional()
  @IsString()
  numero: string;

  @IsOptional()
  @IsString()
  complemento: string;

  @IsOptional()
  @IsString()
  referencia: string;

  @IsOptional()
  @IsString()
  nome_pai: string;

  @IsOptional()
  @IsString()
  nome_mae: string;

  @IsOptional()
  @IsString()
  estado_civil: string;

  @IsOptional()
  @IsString()
  genero: string;

  @IsOptional()
  @IsString()
  vendedor: string;

  @IsOptional()
  @IsString()
  observacao: string;

  @IsOptional()
  @IsString()
  nacionalidade: string;

  @IsOptional()
  @IsString()
  profissao: string;

  @IsOptional()
  @IsString()
  dia_vencimento: number;
}
