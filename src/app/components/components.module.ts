import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    QuestionComponent,
    NavbarComponent,
    ButtonComponent
  ],
  exports:[
    QuestionComponent,
    NavbarComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
