import { passwordValidator } from 'src/app/shared/validators/password.validator';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/validators/user-name.validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  // registrationForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  // });

  registrationForm!: FormGroup;

  get username() {
    return this.registrationForm.get('username');
  }
  get email() {
    return this.registrationForm.get('email');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            forbiddenNameValidator,
          ],
        ],
        password: [''],
        confirmPassword: [''],
        email: [''],
        subscribe: [false],
      },
      { validator: passwordValidator }
    );

    this.registrationForm
      .get('subscribe')
      ?.valueChanges.subscribe((checkedValue) => {
        console.log("work")
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email?.setValidators(Validators.required);
        } else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      });
  }

  loadData() {
    this.registrationForm?.patchValue({
      username: 'test',
      password: 'test',
    });
  }
}
