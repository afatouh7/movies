import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.scss']
})
export class ItemBannerComponent implements OnInit {
@Input() items:IMovie[]=[];
 @Input() title: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
