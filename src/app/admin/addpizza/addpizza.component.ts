import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-addpizza',
  templateUrl: './addpizza.component.html',
  styleUrls: ['./addpizza.component.css']
})
export class AddpizzaComponent implements OnInit {
  msg: any = [];
  avail: boolean;
  onepizza: any;
  image: any;
  https: any;
  constructor(public http: HttpClient, public router: Router, public adminService: AdminService) { }

  ngOnInit(): void {
    this.check()
    this.onepizza = this.adminService.temp;
  }
  check() {
    this.adminService.check().subscribe(
      data => {
        console.log(data);
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

          this.router.navigate(['/login'])

        }
        console.log(error);
      }
    )
  }
  file:any;
  pizzaname: string;
  pizzasize: string;
  pizzaprice: number;

  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.msg = "something went  wrong!!";
      this.avail = true;
      return;
    }
    {
    var formData = new FormData();
    formData.append('file', this.image);
    formData.append('pizzaname', f.controls.pizzaname.value);
    formData.append('pizzasize', f.controls.pizzasize.value);
    formData.append('pizzaprice', f.controls.pizzaprice.value);
    console.log(formData)
    }
    this.http.post<any>('https://idrus-basha-food-order-backend.onrender.com/admin/addpizza', formData,).subscribe(
      (res) => {
        this.adminService.avail = true;
        this.adminService.msg = "Successfully Added a pizza!!!"
        this.router.navigate(['/admin']);
        console.log(res)
      }
      ,
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/admin'])

        }
        console.log(error);
      }
    );

  }
  selectImage(event:any) {
    console.log("image selected");
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
      console.log(file);
    }
  }
}