import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  describe('create', () => {
    it('should return the created user', async () => {
      const user = {
        nome: 'John Doe',
        cpf: '12345678901',
        rg: '12345678',
        data_nascimento: new Date(),
        telefone: '12345678',
        email: 'johndoe@example.com',
        endereco: '123 Main St',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01234567',
        dia_vencimento: 5,
      };
      jest.spyOn(service, 'create').mockResolvedValue(user);

      const result = await controller.create(user);
      expect(result).toEqual(user);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users = [
        {
          nome: 'John Doe',
          cpf: '12345678901',
          rg: '12345678',
          data_nascimento: new Date(),
          telefone: '12345678',
          email: 'johndoe@example.com',
          endereco: '123 Main St',
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'SP',
          cep: '01234567',
          dia_vencimento: 5,
        },
        {
          nome: 'Jane Doe',
          cpf: '98765432109',
          rg: '87654321',
          data_nascimento: new Date(),
          telefone: '87654321',
          email: 'janedoe@example.com',
          endereco: '456 Second St',
          bairro: 'Centro',
          cidade: 'Rio de Janeiro',
          estado: 'RJ',
          cep: '98765432',
          dia_vencimento: 10,
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(users);

      const result = await controller.findAll();
      expect(result).toEqual(users);
    });
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      const user = {
        id: 1,
        nome: 'John Doe',
        cpf: '12345678901',
        rg: '12345678',
        data_nascimento: new Date(),
        telefone: '12345678',
        email: 'johndoe@example.com',
        endereco: '123 Main St',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01234567',
        dia_vencimento: 5,
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(user);

      const result = await controller.findOne(1);
      expect(result).toEqual(user);
    });
  });
});
