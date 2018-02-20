import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],

})
export class DirectiveComponent implements OnInit {
  public status: boolean = true;

  constructor() { }

  ngOnInit() {

  }

  changeStatus() {
    if (this.status) {
      this.status = false;
    }
    else {
      this.status = true;
    }
  }

}
