import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo: string

  constructor(private photos: PhotosService) {
  }

  ngOnInit(): void {
    this.getPhoto()
  }

  getPhoto(): any {
    this.photos.fetchPhotos().subscribe((response) => {
      console.log(response.urls.regular)
      this.photo = response.urls.regular
    })
  }

}
