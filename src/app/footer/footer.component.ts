import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MydataService } from 'src/services/mydata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(private myname:MydataService) { }
  name;
  @Input() parentDataitem:string;
  @Output() childContent = new EventEmitter<string>();
  ngOnInit() {
    this.myname.getname.subscribe(data =>this.name = data)
  }
 onClickEvent(){
   this.childContent.emit('Child content');
 }
}
