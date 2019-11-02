//import {Component,OnInit,ElementRef,ViewChild,EventEmitter, Output} from '@angular/core';
//import {Component,OnInit,ElementRef,ViewChild} from '@angular/core';
import {Component,OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from 'MyDemo/node_modules/@angular/forms/forms';
@Component({
selector:'app-shopping-edit',
templateUrl:'./shopping-edit.component.html',
styleUrls:['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit
{
// @ViewChild('nameInput',{static :true}) nameInputRef :ElementRef;
// @ViewChild('amountInput',{static :true}) amountInputRef :ElementRef;

//@Output() ingredientAdded =new EventEmitter<Ingredient>();


constructor(private slService:ShoppingListService){}
ngOnInit(){}

onAddItem(form :NgForm ){
//const ingName=this.nameInputRef.nativeElement.value;
//const ingAmount=this.amountInputRef.nativeElement.value;
const value=form.value;
const newIngredient=new Ingredient(value.ingName,value.ingAmount);
//this.ingredientAdded.emit(newIngredient);
this.slService.addIngredient(newIngredient);


}
}
