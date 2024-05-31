import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  formLogin: FormGroup = new FormGroup({});

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  public initFormGroup() {
    this.formLogin = new FormGroup({
      user: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    })
  }

  public sendUser() {
    const { value } = this.formLogin
    if (value.user === 'luceros' && value.password === '123') {
      this.router.navigate(['/home']);
    }
  }
}
