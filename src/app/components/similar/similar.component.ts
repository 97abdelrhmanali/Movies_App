import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnChanges {
  constructor(private _MovieService:MovieService){}
  @Input() id:string = '';
  @Input() mediaType : string = '';
  // @Input() item:any
  similar :any[]=[]

  ngOnChanges(changes: SimpleChanges): void {

      this._MovieService.getSimilar(this.mediaType , this.id).subscribe({
        next:(res)=>{
          console.log('similar');
          console.log(res);
          this.similar = res.results.filter((item:any)=>item.poster_path !== null).slice(0,6);
        }
      })
    

  }



}
