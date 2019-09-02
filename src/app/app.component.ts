import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-poc';
  setcolor = "green";
  datafromchild;
  parentData:string = "content from parent";
  childdata(msg:string){
    this.datafromchild = msg;
  }
}
