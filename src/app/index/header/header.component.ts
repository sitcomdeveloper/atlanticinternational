import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fetchImagesofHeaders: any;
  images: any;
  url: any;
  
  // slides: { image: string }[] = [];
  // activeSlideIndex = 0;
  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.HeaderSliders();
    console.log(API_URL)
    this.url = API_URL;
  }
  HeaderSliders() {
    const headersImages = {}
    this.apiService.getheaderSlider(headersImages).subscribe(imagesHeadersRes => {
      this.fetchImagesofHeaders = imagesHeadersRes;
      this.images = this.fetchImagesofHeaders.imageData;
      console.log('fetchImagesofHeaders', this.images);
    })
  }
}
