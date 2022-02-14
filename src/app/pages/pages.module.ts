import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LandingTestComponent } from './landing-test/landing-test.component';
import { PaymentComponent } from './payment/payment.component';
import { MenuSuperheroesComponent } from './menu-superheroes/menu-superheroes.component';
import { LoginComponent } from './login/login.component';
import { LevelsComponent } from './levels/levels.component';
import { MeditationComponent } from './meditation/meditation.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { TrainingComponent } from './training/training.component';
import { CombatComponent } from './combat/combat.component';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    LandingTestComponent,
    MenuSuperheroesComponent,
    PaymentComponent,
    LoginComponent,
    LevelsComponent,
    MeditationComponent,
    NutritionComponent,
    TrainingComponent,
    CombatComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
