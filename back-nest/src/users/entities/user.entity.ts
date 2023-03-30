import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ unique: true })
  rg: string;

  @Column()
  data_nascimento: Date;

  @Column()
  telefone: string;

  @Column({ nullable: true })
  telefone_secundario?: string;

  @Column({ unique: true, nullable: true })
  email?: string;

  @Column()
  endereco: string;

  @Column()
  bairro: string;

  @Column()
  numero: string;

  @Column({ nullable: true })
  complemento?: string;

  @Column({ nullable: true })
  referencia?: string;

  @Column({ nullable: true })
  nome_pai?: string;

  @Column({ nullable: true })
  nome_mae?: string;

  @Column({ nullable: true })
  estado_civil?: string;

  @Column({ nullable: true })
  genero?: string;

  @Column({ nullable: true })
  vendedor?: string;

  @Column({ nullable: true })
  observacao?: string;

  @Column({ nullable: true })
  nacionalidade?: string;

  @Column({ nullable: true })
  profissao?: string;

  @Column({ nullable: true })
  dia_vencimento?: number;
}
