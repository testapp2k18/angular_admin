import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-home-cmp',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
  
})

export class HomeComponent implements OnInit {

  user:any = {}; 
  totalUser:Number = 0;
  userRole:String;
  totalClient:Number = 0;
  
  constructor(private _appservice:AppService) {}

  ngOnInit() {
    this.userRole = sessionStorage.getItem('userRole');
    this.agencyCounter();
  }

  agencyCounter(){
    this._appservice.allUser().subscribe((response)=>{
      if((response.data))
       this.totalUser = response.data.length;
    });
  }

}
