//import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Component,OnInit,Input} from '@angular/core';
//import {RecipeService} from '../../recipes.service';
import {Recipe} from '../../recipe.model';

@Component({
selector:'app-recipes-item',
templateUrl:'./recipes-item.component.html',
styleUrls:['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit{
    @Input() recipe:Recipe;
    @Input() index:number;
    //@Output() recipeSelected =new EventEmitter<Recipe>();
    //constructor(private recipeService : RecipeService){}
    ngOnInit(){}

//onSelected(){
//this.recipeSelected.emit();
//this.recipeService.recipeSelected.emit(this.recipe);
//}
}

