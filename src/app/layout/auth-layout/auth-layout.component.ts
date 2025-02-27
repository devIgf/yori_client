import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer1Component } from '../footer1/footer1.component';
import { Header1Component } from '../header1/header1.component';
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet,Header1Component,Footer1Component],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
