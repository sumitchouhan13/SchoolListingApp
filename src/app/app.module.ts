import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent, canActivate: [AuthGuard] },
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    LandingPageComponent,
    CardGridComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
