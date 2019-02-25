import {Component , OnInit} from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-tables-cmp',
  templateUrl: 'tables.component.html'
})

export class TableComponent implements OnInit {

    public items:Array<any> = [];
    title:String = '';
    data:any;

	constructor(private _appservice:AppService){
      this.title = 'My Table';
	}

  

  ngOnInit() {
  	
  }
}
