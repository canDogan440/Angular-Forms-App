import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/shared/models/tdf-model';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  topics = ['Angular', 'React', 'Vue'];

  userModel: UserInterface = {
    firstName: '',
    lastName: 'dogan',
    address: { city: 'Antalya', district: 'Muratpaşa', zip: '07050' },
    email: 'example@mail.com',
    phone: 1234567890,
    passsword: 'test',
    interestedTopic: 'Angular',
    timePreference: 'morning',
  };

  constructor() {}

  ngOnInit(): void {}

  submitForm(form: any) {
    console.log(form);
  }
}
