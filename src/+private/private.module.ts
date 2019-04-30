import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { PageheaderPage } from './components/pageheader/pageheader';
import { PrivateTemplate } from './private.template';

import { HomePage } from './pages/home/home';
import { FormsModule } from '@angular/forms';

import { ImageLoaderDirective } from './components/img-loader/img-loader-directive';
import { ImageLoader } from './components/img-loader/img-loader';
@NgModule({
  declarations: [ 
    PageheaderPage,
    HomePage,
    ImageLoaderDirective,
    ImageLoader,
    PrivateTemplate,
  ],
  imports: [
    FormsModule,
    IonicModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PageheaderPage,
    PrivateTemplate,
    HomePage,
  ],
  providers: [

  ]
})

export class PrivateModule { }
