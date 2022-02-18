import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateDrivenComponent, ReactiveComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormModule {
  static forRoot() {
    return {
      ngModule: FormModule,
      providers: [],
    };
  }
}
