import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';
import {Router} from '@angular/router';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {

  constructor(public authorizationService: AuthorizationService, public newsService: NewsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToAuthorizationPage(): void {
    this.authorizationService.isAuthorized$.subscribe((value) => {
      if (value) {
        this.router.navigateByUrl('');
      }
    });
  }

  hideItems(): void {
    this.authorizationService.isAuthorized$.next(false);
    this.authorizationService.isAdmin$.next(false);
    this.authorizationService.isAuthError$.next(false);
  }

  clearMemory(): void {
    this.newsService.favorites = [];
  }
}
