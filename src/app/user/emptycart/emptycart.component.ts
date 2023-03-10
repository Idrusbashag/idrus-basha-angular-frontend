import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-emptycart',
  templateUrl: './emptycart.component.html',
  styleUrls: ['./emptycart.component.css']
})
export class EmptycartComponent implements OnInit {

  constructor(public router: Router, public authService: AuthService, public cartService: CartService) { }

  ngOnInit(): void {
    this.check();
  }


  check() {
    this.authService.check().subscribe(
      data => {
        console.log(data);

      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login']);
                }
        console.log(error);
      }
    );
  }

}
