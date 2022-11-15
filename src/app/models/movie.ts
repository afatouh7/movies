export interface IMovie{
  adult: false,
    backdrop_path: string
    genre_ids: number[]

    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    revenue: number,
    runtime: number,
    status:string,
    genres: Genre[];
}
export interface Genre{
  id:number;
  name:string
}
export interface MovieDto{
  page:number;
  results:IMovie[];
  total_results:number;
  total_apges:number;

}
export interface TVDto{
  page:number;
  results:IMovie[];
  total_results:number;
  total_apges:number;

}

export interface Movie{
  page:number;
  results:IMovie;
  total_results:number;
  total_apges:number;

}
export interface MovieVideoDto{
  id:number;
  results: MovieVideo[];
}
export interface MovieVideo{
  site:string;
  key:string;
}

export interface MovieImages{
  backdrops:{
    file_path: string;
  }[];

}
export interface MovieCredits{
  cast:{
    name: string;
    profile_path:string;
  }[]
}

