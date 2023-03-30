import { UpdateInternetPlanDto } from './dto/update-internet-plan.dto';
import { CreateInternetPlanDto } from './dto/create-internet-plan.dto';
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { InternetPlan } from './entities/internet-plan.entity';
import { InternetPlanService } from './internet-plan.service';

@Controller('internet-plans')
export class InternetPlanController {
  constructor(private readonly internetPlanService: InternetPlanService) {}

  @Get()
  async findAll(): Promise<InternetPlan[]> {
    return this.internetPlanService.findAll();
  }

  @Post()
  create(
    @Body() createInternetPlanDto: CreateInternetPlanDto,
  ): Promise<InternetPlan> {
    const internetPlan = new InternetPlan();
    internetPlan.nome = createInternetPlanDto.nome;
    internetPlan.velocidade = createInternetPlanDto.velocidade;
    internetPlan.data_expiracao = createInternetPlanDto.data_expiracao;
    internetPlan.preco = createInternetPlanDto.preco;
    return this.internetPlanService.create(internetPlan);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateInternetPlanDto: UpdateInternetPlanDto,
  ): Promise<InternetPlan> {
    const internetPlan = new InternetPlan();
    internetPlan.nome = updateInternetPlanDto.nome;
    internetPlan.velocidade = updateInternetPlanDto.velocidade;
    internetPlan.data_expiracao = updateInternetPlanDto.data_expiracao;
    internetPlan.preco = updateInternetPlanDto.preco;
    return this.internetPlanService.update(id, internetPlan);
  }
}
