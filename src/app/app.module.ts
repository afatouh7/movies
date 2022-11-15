import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './Components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemBannerComponent } from './Components/item-banner/item-banner.component';
import { ItemComponent } from './Components/item/item.component';
import {PaginatorModule} from 'primeng/paginator';
import { MovieComponent } from './pages/movie/movie.component';
import {TabViewModule} from 'primeng/tabview';
import { VideoEmbedComponent } from './Components/video-embed/video-embed.component';
import {ImageModule} from 'primeng/image';
import { PhotosComponent } from './Components/photos/photos.component';
import {CarouselModule} from 'primeng/carousel';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvshowsComponent,
    GenresComponent,
    SliderComponent,
    ItemBannerComponent,
    ItemComponent,
    MovieComponent,
    VideoEmbedComponent,
    PhotosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
