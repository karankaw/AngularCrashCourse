https://angular.io/guide/template-statements

•Template Statements
•Template Expressions 
•Template Input variable
•Template Reference variable

<button (click)="displayModalDialog()"></button>
Template Statements ---> Usually method we call in components "displayModalDialog" is a template statement
Statements have a context—a particular part of the application to which the statement belongs.

https://angular.io/guide/interpolation#template-expressions
Template expressions
A template expression produces a value and appears within double curly braces, {{ }}. 
Angular resolves the expression and assigns it to a property of a binding target. 
The target could be an HTML element, a component, or a directive.

<h4>{{recommended}}</h4>
<img [src]="itemImageUrl2">
<label>Type something:
  <input #customerInput>{{customerInput.value}}
</label>
 <li *ngFor="let customer of customers">{{customer.name}}</li>
 
 recommended, itemImageUrl2, customerInput, customer - are all expressions
--------------------------------------------------------------------------------------------------
template input variable --->  "hero"
template reference variable  --->"heroInput"
 
 Example1
 <input #heroInput>
<div *ngFor="let hero of heroes">{{hero.name}} and {{heroInput.value}}</div>

Example2
<button (click)="onSave($event)">Save</button>
<button *ngFor="let hero of heroes" (click)="deleteHero(hero)">{{hero.name}}</button>
<form #heroForm (ngSubmit)="onSubmit(heroForm)"> ... </form>

----------------------------------------------------------------------------------------
HTML is the language of the Angular template. Almost all HTML syntax is valid template syntax. 
Except the <script> tag, which is a notable exception; it is forbidden, eliminating the risk of script injection attacks.


The HTML can pretty much be extended with "components" and "directives" which appear as  "new elements" and "new attributes".

<h4>myClick is an event on the custom ClickDirective:</h4>
<button (myClick)="clickMessage=$event" clickable>click with myClick</button>
{{clickMessage}}

You can change the property of Component and do inline assignment

(myClick)="clickMessage=$event" 
or
(myClick)="processClick()"

processClick($event){
clickMessage=$event;
} 



