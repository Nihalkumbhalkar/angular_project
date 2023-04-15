import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('sandwhich', 'this is a test desc', 'https://cdn.vox-cdn.com/thumbor/A4piOY1Z93tJKNtoLMmD0RdX-Bk=/0x0:2048x1360/920x613/filters:focal(861x517:1187x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70516430/ChoppedBlueSkyHajisx.0.jpg'),
    new Recipe('sandwhich', 'this is a test desc', 'https://cdn.vox-cdn.com/thumbor/A4piOY1Z93tJKNtoLMmD0RdX-Bk=/0x0:2048x1360/920x613/filters:focal(861x517:1187x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70516430/ChoppedBlueSkyHajisx.0.jpg'),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
