import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  showSubmenu = false;
  title = 'my-poc';
  setcolor = "green";
  datafromchild;
  parentData:string = "content from parent";
  childdata(msg:string){
    this.datafromchild = msg;
  }
  showmenu(){
    this.showSubmenu = !this.showSubmenu;
  }
}
