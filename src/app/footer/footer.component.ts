import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/services/mydata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(private myname:MydataService) { }
  name;
  ngOnInit() {
    this.myname.getname.subscribe(data =>this.name = data)
  }

}
