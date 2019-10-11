import {Component,OnInit, Output, EventEmitter} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipes.service';
@Component({
selector:'app-recipes-list',
templateUrl:'./recipes-list.component.html',
styleUrls:['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit
{
    //@Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes:Recipe[];

constructor( private recipeService:RecipeService,
             private router:   Router,
             private route:ActivatedRoute){}
ngOnInit(){
this.recipes=this.recipeService.getRecipes();

}
onNewRecipe(){
console.log("hi");
this.router.navigate(['new'],{relativeTo:this.route})
}

// onRecipeSelected(recipe: Recipe )
// {
// console.log("onRecipeSelected");
// this.recipeWasSelected.emit(recipe);
// }
}

