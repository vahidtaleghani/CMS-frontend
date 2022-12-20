import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContractComponent } from './contract/contract.component';
import { ContractpartnerComponent } from './contractpartner/contractpartner.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './new-contract/info/info.component';
import { SidemenuComponent } from './new-contract/sidemenu/sidemenu.component';
import { CommentsComponent } from './new-contract/comments/comments.component';
import { SignedComponent } from './new-contract/signed/signed.component';
import { FilesComponent } from './new-contract/files/files.component';
import { DutiesComponent } from './new-contract/duties/duties.component';
import { NotificationComponent } from './new-contract/notification/notification.component';
import { CategorizationComponent } from './new-contract/categorization/categorization.component';
import { FineComponent } from './new-contract/fine/fine.component';
import { AffectedDepartmentComponent } from './new-contract/affected-department/affected-department.component';
import { ClaimComponent } from './new-contract/claim/claim.component';
import { ContractorComponent } from './new-contract/contractor/contractor.component';
import { LiabilityComponent } from './new-contract/liability/liability.component';
import { AllContractsComponent } from './all-contracts/all-contracts.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contract', component: ContractComponent},
  { path: 'Vertragspartner', component: ContractpartnerComponent },
  { path: 'home', component: HomeComponent },
  
  { path: 'contract', component: ContractComponent,
    children: [
      { path: 'info', component: InfoComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'signed', component: SignedComponent },
      { path: 'files', component: FilesComponent },
      { path: 'duties', component: DutiesComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'categorization', component: CategorizationComponent },
      { path: 'fine', component: FineComponent },
      { path: 'affected-department', component: AffectedDepartmentComponent },
      { path: 'claim', component: ClaimComponent},
      { path: 'contractor', component: ContractorComponent},
      { path: 'liability', component: LiabilityComponent },
      { path: 'all-contracts', component: AllContractsComponent },
    ]
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
