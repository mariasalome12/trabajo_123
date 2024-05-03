import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  publi = 0;

  uploadImages(event: any) {
    const files = event.target.files;
    const previewContainer = document.getElementById('preview');
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        const imgElement = document.createElement('img');
        imgElement.src = reader.result as string;
        imgElement.style.width = '200px';
        imgElement.style.height = '200px';
        imgElement.style.marginRight = '10px';
        imgElement.style.objectFit = 'cover';
        previewContainer!.insertBefore(imgElement, previewContainer!.firstChild);
      };

      reader.readAsDataURL(file);
    }
    this.publi = this.publi + 1;
  }
}

