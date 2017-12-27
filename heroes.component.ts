import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  hero: HeroComponent = {
    Id: 1,
    Name: 'Windstorm'
  };
 

  ngOnInit() {
  }

}
