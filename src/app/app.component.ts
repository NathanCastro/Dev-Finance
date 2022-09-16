import { Component, ViewChild } from '@angular/core';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(PoModalComponent, { static: true }) modal: PoModalComponent;
 

  teste='abrir modal'
  
  public openModal(){
    this.modal.open()
  }
  

}
