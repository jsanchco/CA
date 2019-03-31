import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  // Model for gallery examples
  simpleGalleryOptions = [
    {
      'previewCloseOnEsc': true,
      'imageSize': 'contain',
      'thumbnailSize': 'contain',
      'width': '100%',
      'arrowPrevIcon': 'fa fa-angle-left',
      'arrowNextIcon': 'fa fa-angle-right'
    },
    {'breakpoint': 500, 'height': '300px', 'thumbnailsColumns': 3},
    {'breakpoint': 300, 'height': '200px', 'thumbnailsColumns': 2},
  ];

  multipleRowsGalleryOptions = [
    {
      'previewCloseOnEsc': true,
      'imageSize': 'contain',
      'thumbnailSize': 'contain',
      'thumbnailsColumns': 3,
      'thumbnailsRows': 2,
      'thumbnailsPercent': 40,
      'imagePercent': 60,
      'thumbnailMargin': 2,
      'thumbnailsMargin': 2,
      'width': '100%',
      'arrowPrevIcon': 'fa fa-angle-left',
      'arrowNextIcon': 'fa fa-angle-right'
    },
    {'breakpoint': 500, 'height': '300px', 'thumbnailsColumns': 3},
    {'breakpoint': 300, 'height': '200px', 'thumbnailsColumns': 2},
  ];

  thumbnailsTopGalleryOptions = [
    {
      'previewCloseOnEsc': true,
      'imageSize': 'contain',
      'thumbnailSize': 'contain',
      'layout': 'thumbnails-top',
      'width': '100%',
      'arrowPrevIcon': 'fa fa-angle-left',
      'arrowNextIcon': 'fa fa-angle-right'
    },
    {'breakpoint': 500, 'height': '300px', 'thumbnailsColumns': 3},
    {'breakpoint': 300, 'height': '200px', 'thumbnailsColumns': 2},
  ];

  autoPlayGalleryOptions = [
    {
      'previewCloseOnEsc': true,
      'imageSize': 'contain',
      'thumbnailSize': 'contain',
      'imageAutoPlay': true,
      'imageAutoPlayPauseOnHover': true,
      'previewAutoPlay': true,
      'previewAutoPlayPauseOnHover': true,
      'width': '100%',
      'arrowPrevIcon': 'fa fa-angle-left',
      'arrowNextIcon': 'fa fa-angle-right'
    },
    {'breakpoint': 500, 'height': '300px', 'thumbnailsColumns': 3},
    {'breakpoint': 300, 'height': '200px', 'thumbnailsColumns': 2},
  ];

  onlyImageGalleryOptions = [
    {
      'previewCloseOnEsc': true,
      'imageSize': 'contain',
      'thumbnails': false,
      'width': '100%',
      'arrowPrevIcon': 'fa fa-angle-left',
      'arrowNextIcon': 'fa fa-angle-right'
    },
    {'breakpoint': 500, 'height': '300px'},
    {'breakpoint': 300, 'height': '200px'},
  ];

  onlyThumbnailsGalleryOptions = [
    {
      'image': false,
      'height': '100px',
      'thumbnailSize': 'contain',
      'arrowPrevIcon': 'fa fa-angle-left',
      'arrowNextIcon': 'fa fa-angle-right',
      'width': '100%'
    }
  ];

  galleryImages = [
    {
      small: 'assets/images/ecommerce/product-1-img.png',
      medium: 'assets/images/ecommerce/product-1-img.png',
      big: 'assets/images/ecommerce/product-1-img.png'
    },
    {
      small: 'assets/images/ecommerce/product-2-img.png',
      medium: 'assets/images/ecommerce/product-2-img.png',
      big: 'assets/images/ecommerce/product-2-img.png'
    },
    {
      small: 'assets/images/ecommerce/product-4-img.png',
      medium: 'assets/images/ecommerce/product-4-img.png',
      big: 'assets/images/ecommerce/product-4-img.png'
    },
    {
      small: 'assets/images/ecommerce/product-5-img.png',
      medium: 'assets/images/ecommerce/product-5-img.png',
      big: 'assets/images/ecommerce/product-5-img.png'
    },
    {
      small: 'assets/images/ecommerce/product-6-img.png',
      medium: 'assets/images/ecommerce/product-6-img.png',
      big: 'assets/images/ecommerce/product-6-img.png'
    }, {
      small: 'assets/images/ecommerce/product-7-img.png',
      medium: 'assets/images/ecommerce/product-7-img.png',
      big: 'assets/images/ecommerce/product-7-img.png'
    },
    {
      small: 'assets/images/ecommerce/product-8-img.png',
      medium: 'assets/images/ecommerce/product-8-img.png',
      big: 'assets/images/ecommerce/product-8-img.png'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
