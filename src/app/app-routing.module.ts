import {NgModule}from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppinglistComponent} from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';

const appRoutes:Routes=[
        {path:'',redirectTo:'/recipes',pathMatch:'full'},
        {path:'recipes',component:RecipesComponent , 
            children :[
                        {path:'',component:RecipeStartComponent},
                        {path:'new',component:RecipesEditComponent},
                        {path:':id',component:RecipesDetailComponent},
                        {path:':id/edit',component:RecipesEditComponent}
            ]},
                    {path:'shopping-list',component:ShoppinglistComponent},
];
@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class AppRoutingModule{
}