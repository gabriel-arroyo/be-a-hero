import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    QuestionComponent,
    NavbarComponent
  ],
  exports:[
    QuestionComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
