import {Ingredient} from '../shared/ingredient.model'
export class Recipe{
    public name: string;
    public description:string;
    public imagepath:string;
    public ingredients:Ingredient[];
    constructor(name: string,desc: string,imagepath: string ,ingredient:Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagepath=imagepath;
        this.ingredients=ingredient;
    }


}