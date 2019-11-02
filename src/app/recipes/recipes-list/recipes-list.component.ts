import {Component,OnInit, OnDestroy,Output, EventEmitter} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import { Subscription } from 'rxjs/Subscription';


import {Recipe} from '../recipe.model';
import {RecipeService } from '../recipes.service';
@Component({
selector:'app-recipes-list',
templateUrl:'./recipes-list.component.html',
styleUrls:['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnDestroy
{
    //@Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes:Recipe[];
subscription:Subscription;

constructor( private recipeService:RecipeService,
             private router:   Router,
             private route:ActivatedRoute){}
ngOnInit(){
//
this.subscription=this.recipeService.recipeChanged
.subscribe(
(recipes:Recipe[])=>{

    this.recipes=recipes;
}
);
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
ngOnDestroy(){
    this.subscription.unsubscribe();
}
}

