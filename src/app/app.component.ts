import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'ng2-ckeditor';    
  ckeConfig: any;    
   mycontent: string;    
  log: string   
  @ViewChild('PageContent') PageContent: any;    
  res: any;    

  constructor(  ) { }    
   

  ngOnInit() {    
    this.Getcontent()    
    this.ckeConfig = {    
      allowedContent: false,    
      extraPlugins: 'divarea',    
      forcePasteAsPlainText: true    
    };     
  }    
  onSubmit()    
  {    
    debugger;    
    debugger;    
      
  }    
  Getcontent()    
  {    
      
  }    
  
}
