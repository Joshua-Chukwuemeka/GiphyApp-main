import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent implements OnInit {
  @Input() gifdata!: [] | any; //Property storing the data from the parent component.
  constructor() {}


  ngOnInit(): void {
  }
}
