import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class DetailsService{
  constructor(private _http:Http){}

  getpost()
  {
    return this._http.get('http://220.225.38.123:8081/LogicShore.svc/GetZoneslistbyDist?District=2060')
              .map((response:Response)=>response.json())
              .toPromise()
              .catch(this.handleerror);
  }
  handleerror(error: Response)
  {
    console.error(error);
    throw(error);
  }
}
