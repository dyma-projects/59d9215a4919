import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  public altImage:string;
  public srcImage:string;

  constructor() { }
  
  ngOnInit() {
    this.srcImage = "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg";
    this.altImage = "paysage";
  }

}
