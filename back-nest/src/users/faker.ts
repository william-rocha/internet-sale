/* eslint-disable prettier/prettier */
import { faker } from '@faker-js/faker';
import { User } from './entities/user.entity';

faker.setLocale('pt_BR')

export function generateUser(): User {
  const user = new User();
  user.nome = faker.name.fullName();;
  user.cpf = faker.helpers.arrayElement(['31531532121', '15245645664', '30546454689']);
  user.rg = faker.helpers.arrayElement(['315315321', '152456664', '305454689']);
  user.data_nascimento = faker.date.between('1960-01-01', '2003-12-31');
  user.telefone = faker.phone.number();
  user.telefone_secundario = faker.helpers.arrayElement(['31 99312 2121', '31 99351 2121', '31 92312 2121'])
  user.email = faker.internet.email();
  user.endereco = faker.address.street();
  user.bairro = faker.address.county();
  user.numero = faker.helpers.arrayElement(['31', '21', '55']);
  user.complemento = faker.address.secondaryAddress();
  user.referencia = faker.address.direction();
  user.nome_pai = faker.name.fullName({sex: 'male'});;
  user.nome_mae = faker.name.fullName({sex: 'female'});;
  user.estado_civil = faker.helpers.arrayElement([
    'Solteiro',
    'Casado',
    'Divorciado',
    'Viúvo',
  ]);
  user.genero = faker.helpers.arrayElement(['Masculino', 'Feminino', 'Outro']);
  user.vendedor = faker.name.fullName();;
  user.observacao = faker.lorem.sentence();
  user.nacionalidade = 'Brasileiro';
  user.profissao = faker.name.jobTitle();
  user.dia_vencimento = faker.helpers.arrayElement([5, 15, 30]);
  return user;
}
