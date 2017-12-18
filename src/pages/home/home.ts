import { Component,OnInit } from '@angular/core';
import {DetailsService} from './DetailsService';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[DetailsService]
})
export class HomePage implements OnInit{
  zonedata:any[];
  constructor(private _DetailsService: DetailsService) {

  }
   ngOnInit(){
  this._DetailsService.getpost()
                      .then(data=>
                        {
                          console.log("test");
                          console.log(data);
                        this.zonedata=data.Zoneslist;
                      }
                    );
}

}
