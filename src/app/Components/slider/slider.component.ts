import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations:[
    trigger('slidefade',[
      state('void', style({opacity:0})),
      transition('void <=> *',[animate('1s')]),


    ])
  ]
})
export class SliderComponent implements OnInit {
@Input() items:IMovie []=[] ;
@Input() isBanner: boolean=false;
currentSlideIndex: number=0;


  constructor() { }

  ngOnInit(): void {
    if(!this.isBanner)
    {
      setInterval(()=>{
        this.currentSlideIndex++;
      },5000)
    }

  }

}
