import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './routes/views/home/home.component';
import { HeaderComponent } from './routes/components/header/header.component';
import { FormComponent } from './routes/components/form/form.component';
import { BodyComponent } from './routes/components/body/body.component';
import { IncomeComponent } from './routes/components/income/income.component';
import { ExpensesComponent } from './routes/components/expenses/expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    BodyComponent,
    IncomeComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
