import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg: any = [];
  avail: boolean;
  // var checkArray;
  arr: any[];
  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.readUser();
  }
  readUser() {
    this.authService.readUser().subscribe(
     (data: any)=> {
        this.arr = data.msg;
      },
      error => {
        console.log(error);
      }
    );
  }
  onSubmit(f: NgForm) {

    for (const val of this.arr) {
      const a = val.email;
      const b = f.controls.email.value;
      if (a == b) {
        this.msg = 'User already exist with this user name (email)!!';
        this.avail = true;
        return;
      }
    }

    if (f.controls.p1.value != f.controls.p2.value) {
      this.msg = 'Password   doesn\'t match';
      this.avail = true;
      return;
    }

    if (!f.valid) {
      this.msg = 'Invalid Form Fields';
      this.avail = true;
      return;
    }


    this.authService.register(JSON.stringify(f.value))
      .subscribe(
        data => {
          this.authService.msg = 'successfully registered a user!';
          this.router.navigate(['/login']);
        },
        error => { console.error(error); this.msg = error; }
      );
  }
}
