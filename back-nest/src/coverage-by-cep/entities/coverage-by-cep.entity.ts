import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CoverageByCep {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;
}
