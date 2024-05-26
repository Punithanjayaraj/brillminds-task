import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://abc.com/post';

  constructor(private http: HttpClient) { }

  // login(credentials: { email: string, password: string }): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/login`, credentials);
  // }

  register(user: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  clearToken(): void {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
