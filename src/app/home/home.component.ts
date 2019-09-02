import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/services/mydata.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
 name:string;
  constructor(private myname:MydataService) { }

  ngOnInit() {
     this.myname.getname.subscribe(data =>this.name = data);
  }

}
