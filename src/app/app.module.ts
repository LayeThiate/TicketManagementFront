import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule,MatCardModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatIconModule, MatSelectModule, MatButtonModule, MatListModule, MatDividerModule } from '@angular/material';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsNewEmployeeReactiveComponent } from './tabs-new-employee-reactive/tabs-new-employee-reactive.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { TicketsFilterComponent } from './tickets-filter/tickets-filter.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFilterComponent } from './users-filter/users-filter.component';

import { NewOperatorComponent } from './admin_creation_components/admin_creation_components/new-operator/new-operator.component';
import { NewTechnicianComponent } from './admin_creation_components/admin_creation_components/new-technician/new-technician.component';
import { NewCompanyComponent } from './admin_creation_components/admin_creation_components/new-company/new-company.component';
import { AdminOperatorsComponent } from './admin_data_components/admin-operators/admin-operators.component';
import { AdminTechniciansComponent } from './admin_data_components/admin-technicians/admin-technicians.component';
import { AdminCompanyComponent } from './admin_data_components/admin-company/admin-company.component';
import { OperatorsFilterComponent } from './admin_data_components/operators-filter/operators-filter.component';
import { TechniciansFilterComponent } from './admin_data_components/technicians-filter/technicians-filter.component';
import { CompaniesFilterComponent } from './admin_data_components/companies-filter/companies-filter.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { OperatorAccountComponent } from './operator-account/operator-account.component';
import { TechnicianAccountComponent } from './technician-account/technician-account.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { TechniciansListComponent } from './technicians-list/technicians-list.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { StatsTicketsFilterComponent } from './stats-tickets-filter/stats-tickets-filter.component';
import { StatsTechniciansFilterComponent } from './stats-technicians-filter/stats-technicians-filter.component';
import { StatsCompaniesFilterComponent } from './stats-companies-filter/stats-companies-filter.component';
import { StatsTicketsComponent } from './stats-tickets/stats-tickets.component';
import { StatsTechniciansComponent } from './stats-technicians/stats-technicians.component';
import { StatsCompaniesComponent } from './stats-companies/stats-companies.component';
import { StatsGraphsComponent } from './stats-graphs/stats-graphs.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { TicketPersonDetailsComponent } from './ticket-person-details/ticket-person-details.component';
import { CompanyAccountComponent } from './company-account/company-account.component';
import { SidenavUserComponent } from './sidenav-user/sidenav-user.component';
import { UserTicketListComponent } from './user-ticket-list/user-ticket-list.component';
import { SidenavOperatorComponent } from './sidenav-operator/sidenav-operator.component';
import { OperatorTicketsListComponent } from './operator-tickets-list/operator-tickets-list.component';
import { OperatorCompaniesListComponent } from './operator-companies-list/operator-companies-list.component';
import { OperatorTechniciansListComponent } from './operator-technicians-list/operator-technicians-list.component';
import { NewDemandeurComponent } from './new-demandeur/new-demandeur.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { MyTicketsListComponent } from './my-tickets-list/my-tickets-list.component';
import { TicketService } from './services/ticket.service';
import { CompanyService } from './services/company.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SidenavListComponent,
    TabsNewEmployeeReactiveComponent,
    NewRequestComponent,
    TicketsFilterComponent,
    NewTicketComponent,
    NewOperatorComponent,
    NewTechnicianComponent,
    NewCompanyComponent,
	  AdminOperatorsComponent,
    AdminTechniciansComponent,
    AdminCompanyComponent,
    OperatorsFilterComponent,
    TechniciansFilterComponent,
    CompaniesFilterComponent,
    SidenavAdminComponent,
	NewTicketComponent,
	UsersListComponent,
	UsersFilterComponent,
	AdminAccountComponent,
	OperatorAccountComponent,
	TechnicianAccountComponent,
	UserAccountComponent,
	StatisticsListComponent,
	TechniciansListComponent,
	CompaniesListComponent,
	StatsTicketsFilterComponent,
	StatsTechniciansFilterComponent,
	StatsCompaniesFilterComponent,
	StatsTicketsComponent,
	StatsTechniciansComponent,
	StatsCompaniesComponent,
	StatsGraphsComponent,
	TicketDetailsComponent,
	LoginLayoutComponent,
	ManagerLayoutComponent,
	LoginComponent,
	ManagerComponent,
	TicketPersonDetailsComponent,
	CompanyAccountComponent,
	SidenavUserComponent,
	UserTicketListComponent,
	SidenavOperatorComponent,
	OperatorTicketsListComponent,
	OperatorCompaniesListComponent,
	OperatorTechniciansListComponent,
	NewDemandeurComponent,
	MyTicketsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	RouterModule,
    BrowserAnimationsModule,
	MatTabsModule,
	MatSidenavModule,
	MatToolbarModule,
	MatButtonModule,
    MatIconModule,
	MatListModule,
	MatCardModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatInputModule,
	MatFormFieldModule,
	MatDividerModule,
	FormsModule,
	ReactiveFormsModule,
	MatExpansionModule,
	MatSelectModule,
	MatTableModule,
	MatCheckboxModule,
	HttpClientModule,
	HighchartsChartModule,
	MatAutocompleteModule
  ],
  providers: [TicketService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
