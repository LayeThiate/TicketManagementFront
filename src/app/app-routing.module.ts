import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsNewEmployeeReactiveComponent } from './tabs-new-employee-reactive/tabs-new-employee-reactive.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { MyTicketsListComponent } from './my-tickets-list/my-tickets-list.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { AdminOperatorsComponent } from './admin_data_components/admin-operators/admin-operators.component';
import { AdminTechniciansComponent } from './admin_data_components/admin-technicians/admin-technicians.component';
import { AdminCompanyComponent } from './admin_data_components/admin-company/admin-company.component';
import { NewOperatorComponent } from './admin_creation_components/admin_creation_components/new-operator/new-operator.component';
import { NewTechnicianComponent } from './admin_creation_components/admin_creation_components/new-technician/new-technician.component';
import { NewCompanyComponent } from './admin_creation_components/admin_creation_components/new-company/new-company.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { OperatorAccountComponent } from './operator-account/operator-account.component';
import { TechnicianAccountComponent } from './technician-account/technician-account.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { TechniciansListComponent } from './technicians-list/technicians-list.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

import { AuthenticationGuard } from './auth/authentication.guard';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { ManagerComponent } from './manager/manager.component';
import { CompanyAccountComponent } from './company-account/company-account.component';
import { UserTicketListComponent } from './user-ticket-list/user-ticket-list.component';
import { OperatorTicketsListComponent } from './operator-tickets-list/operator-tickets-list.component';
import { OperatorCompaniesListComponent } from './operator-companies-list/operator-companies-list.component';
import { OperatorTechniciansListComponent } from './operator-technicians-list/operator-technicians-list.component';
import { NewDemandeurComponent } from './new-demandeur/new-demandeur.component';

const routes: Routes = [
 { path: '', component: ManagerLayoutComponent, canActivate: [AuthenticationGuard],
    children: [
		{ path: '' , redirectTo:'/my-tickets-list', pathMatch:'full'},
		{ path: '' , redirectTo:'/operator-list', pathMatch:'full'},
		{ path: 'my-tickets-list', component: MyTicketsListComponent },
		{ path: 'tickets-list', component: NewRequestComponent },
		{ path: 'user-ticket-list', component: UserTicketListComponent },
		{ path: 'new-ticket', component: NewTicketComponent },
		{ path: 'new-technician', component: NewTechnicianComponent },
		{ path: 'new-company', component: NewCompanyComponent },
		{ path: 'users-list', component: UsersListComponent },
		{ path: 'technician-account', component: TechnicianAccountComponent},
		{ path: 'technicians-list', component: TechniciansListComponent },
		{ path: 'companies-list', component: CompaniesListComponent },
		{ path: 'statistics-list', component: StatisticsListComponent},
		{ path: 'ticket-details/:identifier', component: TicketDetailsComponent},
		{ path: 'operator-list', component: AdminOperatorsComponent },
		{ path: 'technician-list', component: AdminTechniciansComponent },
		{ path: 'company-list', component: AdminCompanyComponent },
		{ path: 'new-operator', component: NewOperatorComponent },
		{ path: 'admin-account', component: AdminAccountComponent },
		{ path: 'operator-account', component: OperatorAccountComponent},
		{ path: 'new-operator/:id', component: NewOperatorComponent },
		{ path: 'new-technician', component: NewTechnicianComponent },
		{ path: 'new-technician/:id', component: NewTechnicianComponent },
		{ path: 'new-company', component: NewCompanyComponent },
		{ path: 'new-company/:id', component: NewCompanyComponent },
		{ path: 'users-list', component: UsersListComponent },
		{ path: 'admin-account', component: AdminAccountComponent },
		{ path: 'operator-account', component: OperatorAccountComponent},
		{ path: 'operator-account/:contract-id', component: OperatorAccountComponent},
		{ path: 'technician-account', component: TechnicianAccountComponent},
		{ path: 'technician-account/:contract-id', component: TechnicianAccountComponent},
		{ path: 'user-account', component: UserAccountComponent},
		{ path: 'technicians-list', component: TechniciansListComponent },
		{ path: 'companies-list', component: CompaniesListComponent },
		{ path: 'statistics-list', component: StatisticsListComponent},
		{ path: 'ticket-details', component: TicketDetailsComponent},
		{ path: 'company-account', component: CompanyAccountComponent},
		{ path: 'company-account/:id', component: CompanyAccountComponent},
		{ path: 'operator-tickets-list', component: OperatorTicketsListComponent},
		{ path: 'operator-companies-list', component: OperatorCompaniesListComponent},
		{ path: 'operator-technicians-list', component: OperatorTechniciansListComponent},
		{ path: 'new-demandeur', component: NewDemandeurComponent},
		{ path: 'new-demandeur/:companyName', component: NewDemandeurComponent},
	]
  },
  { path: '', component: LoginLayoutComponent, 
		children: [{ path: 'login', component: LoginComponent }]
  },

{ path: 'operator-list', component: AdminOperatorsComponent },
{ path: 'technician-list', component: AdminTechniciansComponent },
{ path: 'company-list', component: AdminCompanyComponent },
{ path: 'new-operator', component: NewOperatorComponent },
{ path: 'admin-account', component: AdminAccountComponent },
{ path: 'operator-account', component: OperatorAccountComponent},
{ path: 'new-operator/:id', component: NewOperatorComponent },
{ path: 'new-technician', component: NewTechnicianComponent },
{ path: 'new-technician/:id', component: NewTechnicianComponent },
{ path: 'new-company', component: NewCompanyComponent },
{ path: 'new-company/:id', component: NewCompanyComponent },
{ path: 'users-list', component: UsersListComponent },
{ path: 'admin-account', component: AdminAccountComponent },
{ path: 'operator-account', component: OperatorAccountComponent},
{ path: 'technician-account', component: TechnicianAccountComponent},
{path: 'user-account', component: UserAccountComponent},
{ path: 'technicians-list', component: TechniciansListComponent },
{ path: 'companies-list', component: CompaniesListComponent },
{ path: 'statistics-list', component: StatisticsListComponent},
{ path: 'ticket-details', component: TicketDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
