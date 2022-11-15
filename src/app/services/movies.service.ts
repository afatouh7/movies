import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {  IMovie, Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto, TVDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDto } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 baseUrl:string='https://api.themoviedb.org/3/';
 apikey:string='?api_key=57cb9eb84f612420cf417dda43f6d318';



  constructor(private http: HttpClient) { }

  // getMovies(type: string ='upcoming'){
  // return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=57cb9eb84f612420cf417dda43f6d318')
  // }
  getMovies(type: string='upcoming',count: number=12){
    return this.http.get<MovieDto>(this.baseUrl+'movie/'+type+this.apikey)
    .pipe(switchMap(res=>{
      return of(res.results.slice(0,count))
    }))
  }

  getMovieVideoes(id: string){
    return this.http.get<MovieVideoDto>('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=57cb9eb84f612420cf417dda43f6d318')
    .pipe(switchMap(res=>{
      return of(res.results)
    }))
  }

  getMovie(id:string){
    return this.http.get<IMovie>(this.baseUrl+'movie/'+id+this.apikey)

  }
  getMovieImages(id:string){
    return this.http.get<MovieImages >(this.baseUrl+'movie/'+id+'/images'+this.apikey)
    // return this.http.get<MovieImages>('https://api.themoviedb.org/3/movie/'+id+'/images?api_key=57cb9eb84f612420cf417dda43f6d318')

  }

  getMovieCredits(id:string){
    return this.http.get<MovieCredits >(this.baseUrl+'movie/'+id+'/credits '+this.apikey)
    // return this.http.get<MovieImages>('https://api.themoviedb.org/3/movie/'+id+'/images?api_key=57cb9eb84f612420cf417dda43f6d318')

  }


  // SearchMovies(page:number){
  //   return this.http.get<MovieDto>(this.baseUrl+'movie/popular?page=1&'+this.apikey)
  //   .pipe(switchMap(res=>{
  //     return of(res.results)
  //   }))
  // }
  getMovieGenres(){
    return this.http.get<GenresDto>(this.baseUrl+'/genre/movie/list'+this.apikey)
    .pipe(switchMap(res=>{
      return of(res.genres)
    }))
  }
  getMoviesByGenre(genreid:number){
    return this.http.get<MovieDto>('https://api.themoviedb.org/3/discover/movie?with_genres='+genreid+'&api_key=57cb9eb84f612420cf417dda43f6d318')
    .pipe(switchMap(res=>{
      return of(res.results)
    }))
  }

  SearchMovies(page:number){
    return this.http.get<MovieDto>('https://api.themoviedb.org/3/movie/popular?page='+page+'&api_key=57cb9eb84f612420cf417dda43f6d318')
    .pipe(switchMap(res=>{
      return of(res.results)
    }))
  }

  getTV(type: string='latest',count: number=12){
    return this.http.get<TVDto>(this.baseUrl+'tv/'+type+this.apikey)
    .pipe(switchMap(res=>{
      return of(res.results.slice(0,count))
    }))
  }
  


}
