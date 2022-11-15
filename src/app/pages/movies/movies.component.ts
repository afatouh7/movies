import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { IMovie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[]=[];
  constructor(private moviesService: MoviesService,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({genreid})=>{

      if(genreid)
      {
        this.getMoveiByGenre(genreid);

      }else{
        this.getPagedMovies(1);
      }
    })

  }
  getMoveiByGenre(genreid: number){
    this.moviesService.getMoviesByGenre(genreid).subscribe((genr)=>{
      this.movies=genr;
    })

  }
  getPagedMovies(page :number){
    this.moviesService.SearchMovies(page).subscribe(movies=>{
      this.movies=movies;
    })
  }


  paginate(event: any){
    this.getPagedMovies(event.page+1);
  }

}
