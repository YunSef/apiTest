import { Component } from '@angular/core';
import { ApiTestService } from './api-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiTest';
  constructor(private apiservice: ApiTestService){  }
  
  datas:any;
  ngOnInit(){
    this.apiservice.getData().subscribe(res=>{this.datas=res})
  }
}
