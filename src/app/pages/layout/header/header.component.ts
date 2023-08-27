import { Component, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbNavConfig]
})
export class HeaderComponent implements OnInit {
asd=2
  constructor() { }

  ngOnInit(): void {
  }

}
