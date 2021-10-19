import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.authService
      .login(this.form.get('name')?.value, this.form.get('pass')?.value)
      .subscribe((response) => {
        this.router.navigate(['/Usuario']);
      });
  }

}
