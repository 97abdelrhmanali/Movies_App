import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie :any[]=[]
  constructor(private _MovieService:MovieService){
  }

  ngOnInit(): void {
    this._MovieService.getMovies().subscribe({
      next:(res)=>{
        console.log(res);
        this.movie=res.results
      }
    })
  }
}
