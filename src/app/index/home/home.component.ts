import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fetchImagesofHeaders: any;
  images: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.HeaderSliders();
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
