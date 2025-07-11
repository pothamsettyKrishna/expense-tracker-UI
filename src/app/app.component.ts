import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor( private router: ActivatedRoute, private r: Router,){}

  title = 'expense-tracker-frontend';

  new(){
    this.r.navigate(['/form'])
  }

  login(){
    this.r.navigate(['login'])
  }
}
