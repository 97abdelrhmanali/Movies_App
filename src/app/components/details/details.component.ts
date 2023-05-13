import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:string = ''
  mediaType:string=''
  item:any
  constructor(private _ActivatedRoute:ActivatedRoute , private _MovieService:MovieService){}


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.id = params.get("id")!;
      this.mediaType = params.get("mediatype")!;
      this._MovieService.getDetails(this.mediaType,this.id).subscribe({
        next:(res)=>{
          console.log(res);
          this.item = res
        }
      })
    }
    )
  }
}
