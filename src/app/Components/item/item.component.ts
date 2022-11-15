import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() itemData: IMovie |null =null;
  constructor() { }

  ngOnInit(): void {
  }

}
