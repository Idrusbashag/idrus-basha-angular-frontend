import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public avail = false;
  public msg = '';
  public baseUri = 'https://idrus-basha-food-order-backend.onrender.com';
  public headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public http: HttpClient, public router: Router) { }

  check() {
    return this.http.get(this.baseUri + '/check', { headers: this.headers });
  }

  register(body: any) {
    return this.http.post('https://idrus-basha-food-order-backend.onrender.com/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  readUser() {
    return this.http.get(this.baseUri + '/read', { headers: this.headers });
  }

  reset(body: any) {
    return this.http.post('https://idrus-basha-food-order-backend.onrender.com/reset', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  resetpassworddone(body: any) {

    return this.http.put('https://idrus-basha-food-order-backend.onrender.com/forgot-password-done', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getOtp() {
    return this.http.get(this.baseUri + '/otp', { headers: this.headers });
  }

  login(body: any) {
    return this.http.post('https://idrus-basha-food-order-backend.onrender.com/login', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getAllPizza() {
    return this.http.get(this.baseUri + '/getallpizza', { headers: this.headers });
  }


  Oneuser(id) {
    return this.http.delete(this.baseUri + '/getoneuser/' + id, { headers: this.headers });
  }


  // if present then true otherwise false
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }


  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  editprofile(id, name, email, contact) {
    return this.http.get(this.baseUri + '/editprofile?id=' + id + '&name=' + name + '&email=' + email + '&contact=' + contact, { headers: this.headers });
  }

  changepassword(body: any) {
    return this.http.post('https://idrus-basha-food-order-backend.onrender.com/changepassword', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  sendfeedback(body: any) {
    return this.http.post('https://idrus-basha-food-order-backend.onrender.com/sendfeedback', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getCartItem()
  {
    return this.http.get(this.baseUri + '/getcartitem', { headers: this.headers });
  }
}
