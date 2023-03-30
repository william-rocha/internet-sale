import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InternetPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  velocidade: number;

  @Column({ type: 'date' })
  data_expiracao: Date;

  @Column()
  preco: number;

  @Column()
  descricao: string;
}
