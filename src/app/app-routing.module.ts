import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ImpementationComponent } from './impementation/impementation.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { RainfallComponent } from './rainfall/rainfall.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SoilanalysisComponent } from './soilanalysis/soilanalysis.component';
import { FertilizersComponent } from './fertilizers/fertilizers.component';
import { LogoutComponent } from './logout/logout.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'businesses', component: BusinessesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  {
    path:'implementation',
    component: ImpementationComponent
   },
   {
    path:'benefits',
    component: BenefitsComponent 
   },
   {
     path:'rainfall',
     component: RainfallComponent
   },
   {
     path:'temperature',
     component: TemperatureComponent
   },
   {
     path: 'soilanalysis',
     component: SoilanalysisComponent
   },
   {
    path:'fertilizers',
    component: FertilizersComponent
 },

  { path: 'profile', component: ProfileComponent },
  {path:'logout',component:LogoutComponent},
  {path:'settings',component:SettingsComponent},
  {path: 'home', component: HomeComponent, pathMatch: 'full' }, // Default route for home
  { path: '**', component: NotFoundComponent } // Wildcard route for 404 Not Found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
