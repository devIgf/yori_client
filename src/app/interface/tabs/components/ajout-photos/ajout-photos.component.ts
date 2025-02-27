import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-telecharge-photos',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon
  ],
  templateUrl: './ajout-photos.component.html',
  styleUrl: './ajout-photos.component.css'
})
export class AjoutPhotosComponent {

  imagesSecondary: string[] = [
    'assets/img/chambre.png',
    'assets/img/card1.png',
    'assets/img/card2.png',
    'assets/img/card3.png',
    'assets/img/serpent.png',
    'assets/img/test.png',
  ];
  selectedImagesSecondary: Set<number> = new Set();
  @ViewChild('fileInputSecondary') fileInputSecondary: any;


  addImageSecondary(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            this.imagesSecondary.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }

  triggerFileInputSecondary(): void {
    this.fileInputSecondary.nativeElement.click(); 
  }


  removeImage(index: number) {
    this.imagesSecondary.splice(index, 1);
  }


}

