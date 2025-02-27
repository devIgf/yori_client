import { Component } from '@angular/core';
import { Header2Component } from '../../layout/header2/header2.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [
    Header2Component,
    TabsComponent
],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

} 
