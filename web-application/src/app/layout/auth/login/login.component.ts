import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  success: boolean = false;
  loginFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
  private router: Router) { }

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
      this.router.navigate(['main']);
    }  
  }

}
