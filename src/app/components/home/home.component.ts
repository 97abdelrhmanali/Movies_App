import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _MovieService:MovieService){}
  trendingMovies:any[]=[];
  trendingTV:any[]=[];
  trendingPeople:any[]=[];

  ngOnInit(): void {
    this._MovieService.getTrending(`movie`).subscribe({
      next:(res)=>{
        console.log(res);
        this.trendingMovies = res.results.slice(0,10)
      }
    })

    this._MovieService.getTrending(`tv`).subscribe({
      next:(res)=>{
        console.log(res);
        this.trendingTV = res.results.slice(0,10)
      }
    })


    this._MovieService.getTrending(`person`).subscribe({
      next:(res)=>{
        console.log(res);
        this.trendingPeople = res.results.slice(0,10)
      }
    })
  }


}
