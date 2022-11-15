import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { IMovie, Movie, MovieCredits, MovieImages, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
movie: IMovie  ;
movievideos:MovieVideo[]=[];
movieImages:MovieImages |null=null;
movieCredits:MovieCredits |null=null;


  constructor(private route: ActivatedRoute,private moviesservice: MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) =>{
     this.getMovie(id);
     this.getMovieVideo(id);
     this.getMovieImages(id);
     this.getMovieCredits(id);


    });
  }
  ngOnDestroy(): void {
    console.log('component destroed');

  }
  getMovie(id:string){
    this.moviesservice.getMovie(id).subscribe((movieData)=>{
      this.movie=movieData

    })

  }
  getMovieVideo(id : string){
   this.moviesservice.getMovieVideoes(id).subscribe((movieVideoData) =>{
    this.movievideos=movieVideoData;

   })
  }
  getMovieImages(id : string){
    this.moviesservice.getMovieImages(id).subscribe((movieImagesData) =>{
     this.movieImages=movieImagesData;

    })
   }
   getMovieCredits(id : string){
    this.moviesservice.getMovieCredits(id).subscribe((movieCreditsData) =>{
     this.movieCredits=movieCreditsData;

    })
   }

}
