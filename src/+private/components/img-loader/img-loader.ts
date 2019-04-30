import { Component, Input } from '@angular/core';

/**
 * Generated class for the PageheaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'img-loader',
  templateUrl: 'img-loader.html',
})
export class ImageLoader {
  @Input() src: string;
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PageheaderPage');
  }

}
