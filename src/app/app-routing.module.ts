import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingTestComponent } from './pages/landing-test/landing-test.component';
import { LevelsComponent } from './pages/levels/levels.component';
import { LoginComponent } from './pages/login/login.component';
import { MeditationComponent } from './pages/meditation/meditation.component';
import { MenuSuperheroesComponent } from './pages/menu-superheroes/menu-superheroes.component';
import { NutritionComponent } from './pages/nutrition/nutrition.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { TrainingComponent } from './pages/training/training.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'landing-test', component: LandingTestComponent },
  { path: 'levels', component: LevelsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'meditation', component: MeditationComponent },
  { path: 'menu-superheroes', component: MenuSuperheroesComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'training', component: TrainingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
