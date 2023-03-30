import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InternetPlan } from './entities/internet-plan.entity';

@Injectable()
export class InternetPlanService {
  constructor(
    @InjectRepository(InternetPlan)
    private readonly internetPlanRepository: Repository<InternetPlan>,
  ) {}

  async findAll(): Promise<InternetPlan[]> {
    return await this.internetPlanRepository.find();
  }

  async create(internetPlan: InternetPlan): Promise<InternetPlan> {
    return await this.internetPlanRepository.save(internetPlan);
  }

  async update(id: any, internetPlan: InternetPlan): Promise<InternetPlan> {
    const updatedInternetPlan = await this.internetPlanRepository.findOne(id);
    updatedInternetPlan.nome = internetPlan.nome;
    updatedInternetPlan.velocidade = internetPlan.velocidade;
    updatedInternetPlan.data_expiracao = internetPlan.data_expiracao;
    updatedInternetPlan.preco = internetPlan.preco;
    return await this.internetPlanRepository.save(updatedInternetPlan);
  }

  async delete(id: number): Promise<void> {
    await this.internetPlanRepository.delete(id);
  }
}
