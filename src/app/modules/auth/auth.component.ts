import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/core/index.service.triggers';
import { CustomValidators } from 'src/app/core/index.validator';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private notifySrv: NotifyService
  ) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup() {
    this.formLogin = new FormGroup({
      user: new FormControl('', [
        Validators.required, CustomValidators.emailValidator()
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    })
  }

  public sendUser() {
    const { value } = this.formLogin
    if (value.user === 'a@gmail.com' && value.password === '123') {
      this.router.navigate(['/home']);
    } else {
      this.notifySrv.addNotification({
        status: 'error',
        message: 'Usuario o contraseña incorrecta',
      })
    }
  }
}
