import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  actors :any[]=[]
  constructor(private _MovieService:MovieService){
  }

  ngOnInit(): void {
    this._MovieService.getPerson().subscribe({
      next:(res)=>{
        console.log(res);
        this.actors=res.results
      }
    })
  }
}
