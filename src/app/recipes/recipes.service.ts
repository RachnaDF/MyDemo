import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =
        [new Recipe('A TEST Recipe'
            , 'What do you want else?',
            'https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_1280.jpg', [new Ingredient('chilly', 1), new Ingredient('paneer', 5)]),
        new Recipe('B TEST Recipe',
            'What do you want else?',
            'https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_1280.jpg', [new Ingredient('chillyFlex', 2), new Ingredient('oragano', 7)])


        ];

    constructor(private slService: ShoppingListService) {


    }
    getRecipes() {

        return this.recipes.slice();
    }
    getRecipe(index:number) {

        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);

    }
}