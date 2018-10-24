import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  success: boolean = false;
  loginFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginFormGroup = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.loginFormGroup.valid) {
      this.success = true;
    }  
  }

}
