import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  loginForm: FormGroup;
  public maxLength = 20;
  public minLength = 4;
  public hideShow = true;

  constructor(private fb: FormBuilder, public authorizationService: AuthorizationService, private router: Router) {
  }

  ngOnInit(): void {

  this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]],
      password: [null, [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]]
    });
  }

  changeValue(): void {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.authorizationService.setCredentials(username, password);
  }

  navigateToHomepage(): void {
    this.authorizationService.isAuthorized$.subscribe((value) => {
      if (value) {
        this.router.navigateByUrl('/homepage');
      }
    });
  }
}

