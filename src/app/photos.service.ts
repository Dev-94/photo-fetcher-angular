import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

interface PhotoResponse {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root',

})
export class PhotosService {

  //API secret
  // BIm9FZZk-JYaVMEdYp-RWlf1hte5W1svR-xYHvKe5Kc

  constructor(private http: HttpClient) { }

  fetchPhotos(): Observable<any> {
    return this.http.get<PhotoResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID vNosoYpoZpo8NqxyYcggcrI2-Db59NzoLhvfp8YUjPY',
        'Accept-Version': 'v1'
      }
    })
  }

  // "urls": {
  //   "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
  //   "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
  //   "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
  //   "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
  //   "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
  // },
}
