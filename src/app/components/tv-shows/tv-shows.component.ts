import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
  tv :any[]=[]
  constructor(private _MovieService:MovieService){
  }

  ngOnInit(): void {
    this._MovieService.getTV().subscribe({
      next:(res)=>{
        console.log(res);
        this.tv=res.results
      }
    })
  }
}
