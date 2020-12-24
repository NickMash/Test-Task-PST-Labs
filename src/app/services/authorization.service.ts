import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public users = [
    {
      name: 'admin',
      password: 'admin',
      role: 'admin'
    },
    {
      name: 'user',
      password: 'user',
      role: 'user'
    }
  ];

  isAuthorized$ = new BehaviorSubject(false);
  isAdmin$ = new BehaviorSubject(false);
  isAuthError$ = new BehaviorSubject(false);
  public userName: string;

  constructor() { }

  private findUser(username, password): { name: string, password: string, role: string } {
    this.userName = username;
    return this.users.find(item => (item.password === password && item.name === username));
  }

  public setCredentials(username, password): void {
    const currentUser = this.findUser(username, password);

    if (currentUser) {
      this.isAuthorized$.next(true);
      if (currentUser.role === 'admin') {
        this.isAdmin$.next(true);
      }
    } else {
      this.isAuthError$.next(true);
    }
  }
}
