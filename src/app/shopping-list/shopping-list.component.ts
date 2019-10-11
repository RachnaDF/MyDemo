import {Component,OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
selector:'app-shopping-list',
templateUrl:'./shopping-list.component.html',
styleUrls:['./shopping-list.component.css']
})
export class ShoppinglistComponent implements OnInit{

    ingredients:Ingredient[];
// ingrediants:Ingredient[]=[
// new Ingredient('Apple',5),
// new Ingredient('Tometo',10),

// ];
constructor(private slService:ShoppingListService){}
ngOnInit(){
this.ingredients=this.slService.getIngredients();
this.slService.ingredientsChanged
.subscribe(
    (
        ingredients:Ingredient[])=>{
            this.ingredients=ingredients;
        }

    );

}

// onIngredientAdded(ingredient:Ingredient){

// this.ingredients.push(ingredient);
// }
}
