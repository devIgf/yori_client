import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-client-code',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './creer-passe.component.html',
  styleUrl: './creer-passe.component.css'
})
export class CreerPasseComponent {
  showPad:any;

  passwordToogle(){
    this.showPad = !this.showPad;
  }

} 
 