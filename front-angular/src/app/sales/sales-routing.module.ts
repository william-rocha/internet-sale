import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepCoverageComponent } from './pages/cep-coverage/cep-coverage.component';
import { FormsUsersComponent } from './pages/forms-users/forms-users.component';
import { InternetPlansComponent } from './pages/internet-plans/internet-plans.component';

const routes: Routes = [
  { path: 'verificar-cobertura-cep', component: CepCoverageComponent },
  { path: 'selecionar-plano', component: InternetPlansComponent },
  { path: 'cadastro-usuario', component: FormsUsersComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
