import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {MatFormField,MatFormFieldControl,} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ContractComponent } from './contract/contract.component';
import { ContractpartnerComponent } from './contractpartner/contractpartner.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './new-contract/info/info.component';
import { SidemenuComponent } from './new-contract/sidemenu/sidemenu.component';
import { CommentsComponent } from './new-contract/comments/comments.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatRadioModule} from '@angular/material/radio';
import { SignedComponent } from './new-contract/signed/signed.component';
import { FilesComponent } from './new-contract/files/files.component';
import { DutiesComponent } from './new-contract/duties/duties.component';
import { NotificationComponent } from './new-contract/notification/notification.component';
import { CategorizationComponent } from './new-contract/categorization/categorization.component';
import { DataSource } from '@angular/cdk/collections';
import { FineComponent } from './new-contract/fine/fine.component';
import { AffectedDepartmentComponent } from './new-contract/affected-department/affected-department.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ClaimComponent } from './new-contract/claim/claim.component';
import { ContractorComponent } from './new-contract/contractor/contractor.component';
import { LiabilityComponent } from './new-contract/liability/liability.component';
import {MatDialogModule} from '@angular/material/dialog';


// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { AllContractsComponent } from './all-contracts/all-contracts.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContractComponent,
    ContractpartnerComponent,
    HomeComponent,
    InfoComponent,
    SidemenuComponent,
    CommentsComponent,
    SignedComponent,
    FilesComponent,
    DutiesComponent,
    NotificationComponent,
    CategorizationComponent,
    FineComponent,
    AffectedDepartmentComponent,
    ClaimComponent,
    ContractorComponent,
    LiabilityComponent,
    AllContractsComponent,
    ConfirmDialogComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatRadioModule,
    NgMultiSelectDropDownModule,
    MatDialogModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
