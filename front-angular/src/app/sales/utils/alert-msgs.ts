export class AlertMsgs {

  static cepCoverage = {
    error: {
      title: ``,
      text: 'Nenhuma cidade foi encontrada com esse CEP.',
      confirmButtonText: 'Fechar',
    },
  };

  static netPlans = {
    success: {
      title: `planos podem estar disponíveis para a sua região`,
      text: 'plano escolhido pode estar sujeito à análise de disponibilidade.',
      confirmButtonText: 'Fechar',
    },
    warning: {
      title: '',
      text: 'Você deve escolher um Plano para continuar.',
      confirmButtonText: 'Ok',
    },
  };

  static userClient = {
    success: {
      title: '',
      text: 'Formulário enviado com sucesso',
      confirmButtonText: 'Fechar',
    },
    error: {
      title: ``,
      text: 'Por favor, preencha todos os campos obrigatórios.',
      confirmButtonText: 'Fechar',
    },
  };

}
