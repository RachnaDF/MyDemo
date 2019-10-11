import { Component, OnInit, Injectable } from '@angular/core';
import { RecipeService } from '../recipes.service';
@Injectable()
@Component({
    selector: 'app-recipe-start',
    templateUrl: './recipe-start.component.html',
    styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {
    
    constructor(private recipeService: RecipeService) { }
    ngOnInit() { }
   
}

