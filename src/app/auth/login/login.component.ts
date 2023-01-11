import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser(formData: { username: string; password: string; }) {
    throw new Error('Method not implemented.');
  }

  public msg: any = [];
  public avail!: boolean;
  public isAdmin!: boolean;
  public isBlocked!: boolean;
  // var checkArray;
  arr: any = [];
  loginForm: any;
  constructor(public router: Router, public toastr: ToastrService, public authService: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = false;
    this.isBlocked = false;
    if (this.authService.msg == 'successfully changed password!!')
    {
      this.toastr.success('successfully changed password!!', '', {
        timeOut: 2000,
        closeButton: true
      });
    }
    if (this.authService.msg == 'successfully registered a user!')
    {
      this.toastr.success('successfully registered a user!', '', {
        timeOut: 2000,
        closeButton: true
      });
    }
    if (this.authService.msg == 'successfully password-reset done!!')
    {
      this.toastr.success('successfully password-reset done!!', '', {
        timeOut: 2000,
        closeButton: true
      });

    }

    this.readUser();
  }
  readUser() {
    this.authService.readUser().subscribe(
      (data: any) => {
        this.arr = data.msg;
      },
      error => {
        console.log(error);
      }
    );
  }


  onSubmit(f: NgForm) {

    if (!f.valid) {
      this.msg = 'Invalid Email or password';
      this.avail = true;
      // console.log(this.msg);
      return;
    }

    for (const val of this.arr) {
      const a = val.email;
      const b = f.controls.email.value;
      const c = val.role;
      const d = 'admin';
      const e = val.blocked;
      // console.log("blocked ?" + e);
      if (a == b && c == d) {
        this.isAdmin = true;
      }
      if (a == b && e) {
        this.isBlocked = true;
      }
    }
    // console.log("blocked> below = " + this.isBlocked);
    // console.log(this.isAdmin);
    if (this.isBlocked) {
      this.msg = 'You are blocked by Admin wait until admin unblock you!!!';
      this.avail = true;
      // console.log(this.msg);
      return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this.authService.login(JSON.stringify(f.value))
      .subscribe(
        (data: any)=> {
          console.log(data);

          if (data.error)
          {
            this.msg = data.error;
            this.avail = true;
            return;
          }


          if (this.isAdmin)
          {
            console.log('in admin');
            // if admin
            localStorage.setItem('token', data.token);
            localStorage.setItem('N1@#I2@#M3@#D4@#A6', 'yU@$SVBs6Hh5sGggbAbf50');
            this.router.navigate(['/admin']);
          }
          else
          {
            // if customer
            console.log('in customer');
            localStorage.setItem('token', data.token);
            localStorage.setItem('userid', f.controls.email.value);
            localStorage.setItem('N1@#I2@#M3@#D4@#A6', 'nU@$SVBs6Hh5sGggbAbf50');
            this.router.navigate(['/userhome']);
          }

        },
        error => {
           console.error(error);
           this.msg = error;
          }
      );
  }
}

