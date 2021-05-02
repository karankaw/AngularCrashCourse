<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  
   
  
  
  https://www.smashingmagazine.com/2019/02/angular-application-bootstrap/
  https://www.techiediaries.com/angular-bootstrap-demo/contact-create - This website is made in  Angular itself
  npm install --save bootstrap jquery
  (In this case, bootstrap v4.2.1 and jquery v3.3.1 are installed.)
  "architect": {
  "build": {
    [...], 
    "styles": [
      "src/styles.css", 
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
      ]
    },
==================================================================================================
http://valor-software.com/ngx-bootstrap/
https://ng-bootstrap.github.io/#/home

https://stackoverflow.com/questions/43758400/what-is-the-difference-between-ng-bootstrap-and-ngx-bootstrap
Allowing you to use Bootstrap in Angular (2+) without the use of jQuery.
ngx-bootstrap suppprts bootstrap 3 & 4, 
ng-bootstrap (ui-bootstrap in AngularJs) supports only bootstrap 4
==================================================================================================

https://stackblitz.com/edit/angular-bhegsq?file=src%2Fapp%2Faccordion-header.html
==================================================================================================

https://darshansaroya.com/bootstrap-vs-mdbootstrap/
Bootstrap Vs MDBootstrap
MDBootstrap stands for material design for bootstrap
==================================================================================================
https://getbootstrap.com/docs/4.6/components/collapse/#accordion-example
https://getbootstrap.com/docs/4.6/content/tables/


https://getbootstrap.com/docs/5.0/components/accordion/
https://getbootstrap.com/docs/5.0/content/tables/

Bootstrap 4 and Bootstrap 5 Both Supported
==================================================================================================
border

https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.css
https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.js

.btn-block {
  display: block;
  width: 100%;
}

https://getbootstrap.com/docs/4.6/utilities/visibility/

<div class="visible">...</div>
<div class="invisible">...</div>

.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
==================================================================================================

https://material.angular.io/components/table/overview
https://material.angular.io/
https://material.angular.io/components/expansion/overview
https://stackblitz.com/edit/angular-tmaadv [Angular Material Table]
==================================================================================================
https://ng-bootstrap.github.io/#/home
==================================================================================================
https://mdbootstrap.com/
Bootstrap 4 and Bootstrap 5 Both Supported
https://mdbootstrap.com/docs/standard/data/tables/

Low level classes 
Open in MDB Editor
Pro and Free
700+ for Pro
5000+ for Pro 
==================================================================================================
https://stackblitz.com/edit/angular-bhegsq  [NGB Accordion] BEST BEST IMP IMP
https://stackblitz.com/edit/web-platform-bvnshh  [Bootstrap 4 Accordion]   

https://stackblitz.com/edit/angular-u2ewub [Angular Material]
https://stackblitz.com/edit/angular-tmaadv [Angular Material Table]

==================================================================================================
PrimeNg is higher abstraction , It has no classes for 1-1 Customisation
It has themes, It lets you layout content
It has no individual element level classes
https://primefaces.org/primeng/showcase/#/table
==================================================================================================

https://stackoverflow.com/questions/39826597/angular-2-ngif-not-a-known-property-of-div


import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

==================================================================================================
https://stackoverflow.com/questions/49662864/commonmodule-vs-browsermodule-in-angular
https://stackoverflow.com/questions/39058075/cant-bind-to-ngif-since-it-isnt-a-known-property-of-div/40585231#40585231
Just for anyone who still has an issue, I also had an issue where I typed ngif rather than ngIf (notice the capital 'I').

http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/colors/colors_picker.asp-colorhex=B0E0E6.html
==================================================================================================

https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_icon_buttons

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<p>Icon buttons with text:</p>
<button class="btn"><i class="fa fa-home"></i> Home</button>
<button class="btn"><i class="fa fa-upload"></i> Upload</button>
<button class="btn"><i class="fa fa-bars"></i> Menu</button>
<button class="btn"><i class="fa fa-trash"></i> Trash</button>
<button class="btn"><i class="fa fa-close"></i> Close</button>
<button class="btn"><i class="fa fa-folder"></i> Folder</button>

==================================================================================================
https://getbootstrap.com/docs/3.3/components/#glyphicons

https://www.w3schools.com/bootstrap/bootstrap_ref_comp_glyphs.asp

==================================================================================================
https://www.tektutorialshub.com/angular/event-binding-in-angular/

==================================================================================================
<accordion-group ng-repeat="group in groups" heading="{{group.title}}" is-open="group.open">
  <accordion-heading>
    <span ng-click="opened(group, $index)">{{group.content}}</span>
  </accordion-heading>
</accordion-group>

How to control various Indices - Row Level Fields 
We maintain a separate PoJo for that

==================================================================================================
'primeng'         Primefaces Angular Component : Bit difficult to customise individually:Has Themes:Has Buttons with icons


'ngbootrap' - Bootstrap Angular Components - Good has Bootstrap Classes and Individual Customisation option
heavily inspired by the original Bootstrap design.


'MdBootstrap'  - Material Design for Bootstrap - Pro and Paid - handles Bootstrap 4/5 - Pro is a hassle X, MDB Editor, Not Documented too detail
'Angular Material' from Google : Good , But Limited Components- A bit of abstraction and not too open
'getboostrap' Bootstrap4/5 Normal : Very Higly Customisable at individual Level: Angular has to be added X, A bit less maintenable
===================================================================================================
C:\IEF\CORA_AI_IEF_GUI\cora-ai-annotator-ui\node_modules\primeng\resources\themes\md-light-deeppurple\fonts
theme.css
woff   -  Web Fonts
===================================================================================================

https://fontawesome.com/icons/file-import?style=regular

<i class="fas fa-upload"></i>
<i class="fas fa-file-export"></i>
<i class="fas fa-file-import"></i>
===================================================================================================
npm install primeicons --save
C:\IEF\CORA_AI_IEF_GUI\cora-ai-annotator-ui\node_modules\primeicons

Getting Started
PrimeIcons use the pi pi-{icon} syntax such as pi pi-check. 
A standalone icon can be displayed using an element such as i or span
<i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>

icon="pi pi-upload"

sign-out

https://primefaces.org/primeng/showcase/#/icons

primengIcon ----- pi
pi-sign-in
pi-sign-out
===================================================================================================

https://www.flaticon.com/free-icon/import_724831
===================================================================================================

https://fonts.google.com/icons?selected=Material+Icons

===================================================================================================
https://stackoverflow.com/questions/38727047/duplicate-line-in-visual-studio-code
===================================================================================================
https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.css
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #5bc0de;
}

.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}

===================================================================================================
https://www.w3schools.com/bootstrap/bootstrap_ref_comp_glyphs.asp

https://www.glyphicons.com 

Glyphicons  - Only Available upto Bootstrap 3
===================================================================================================
How to add  Icons in Bootstrap Buttons
https://icons.getbootstrap.com/icons/download/

https://getbootstrap.com/docs/4.6/extend/icons/#bootstrap-icons

<i class="bi bi-download"></i>
https://stackblitz.com/edit/angular-bhegsq?file=src%2Findex.html
===================================================================================================
https://www.w3schools.com/html/html5_svg.asp
Differences Between SVG and Canvas
SVG is a language for describing 2D graphics in XML.

Canvas draws 2D graphics, on the fly (with a JavaScript).

SVG is XML based, which means that every element is available within the SVG DOM. 
You can attach JavaScript event handlers for an element.
In SVG, each drawn shape is remembered as an object. 
If attributes of an SVG object are changed, the browser can automatically re-render the shape.

Canvas is rendered pixel by pixel. In canvas, once the graphic is drawn, it is forgotten by the browser. If its position should be changed, the entire scene needs to be redrawn, including any objects that might have been covered by the graphic.

Comparison of Canvas and SVG
The table below shows some important differences between Canvas and SVG:
Canvas																													SVG
Resolution dependent																			Resolution independent
No support for event handlers                                                            Support for event handlers
Poor text rendering capabilities                                                          Best suited for applications with large rendering areas (Google Maps)
You can save the resulting image as .png or .jpg                            Slow rendering if complex (anything that uses the DOM a lot will be slow)
Well suited for graphic-intensive games                                            Not suited for game applications 
===================================================================================================
Add ICON in Button
Get a SVG File
SVG File is XML Based
Canvas is made by JS runtime

<img src="image.svg"> 
https://css-tricks.com/snippets/htaccess/serve-svg-correct-content-type/

https://css-tricks.com/using-svg/


https://scotch.io/courses/build-your-first-angular-website/adding-an-imagelogo-in-angular

https://krasimirtsonev.com/blog/article/CSS-before-and-after-pseudo-elements-in-practice

SAVE .svg File in assets/img/download-icon.svg

<button class="btn"><img src ="assets/img/download-icon.svg"></button>

//Pseudo element added before element having class ".btn"
.btn:before{
	
	content: "A Text"
	background: url("icon.jpg")
	
	===================================================================================================
	
}

Syntax
Let's say that we have the following simple html markup:

<p>paragraph text</p>
We are able to use a pseudo element like that:

p:before {
    content: "this is ";
    font-weight: bold;
    font-style: italic;
}

Again, we have the same markup <p>paragraph text</p> and the following CSS:

p:before {
    content: "";
    display: block;
    background: url("icon.jpg") no-repeat;
    width: 20px;
    height: 20px;
    float: left;
    margin: 0 6px 0 0;
}
icon.jpg is a 20x20 image exported from Photoshop. Here is how this looks in a browser:
===================================================================================================

https://stackblitz.com/edit/web-platform-vslvsr?file=script.js
https://sabe.io/classes/css/pseudo-classes-elements#what-are-pseudo-elements
https://getbootstrap.com/docs/4.6/components/collapse/#accordion-example
https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.js
https://getbootstrap.com/docs/4.6/utilities/visibility/
https://www.sitepoint.com/community/t/using-nth-class-on-nested-div/205663
https://www.w3schools.com/css/css_combinators.asp
https://sabe.io/classes/css/grouping-nesting-selectors
https://css-tricks.com/almanac/selectors/d/descendant/#:~:text=Descendant%20means%20anywhere%20nested%20within,the%20next%20nested%20level%20down.
https://css-tricks.com/multiple-class-id-selectors/
https://www.w3schools.com/cssref/sel_firstchild.asp
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_firstchild
https://www.w3schools.com/jquery/jquery_ref_html.asp
https://www.w3schools.com/jquery/jquery_ref_html.asp

// ===================================================================================================
CSS Combinators


Child
Descendant
First
Last
Nth

No Space
, 

Pseudo Element ::

Pseudo Classes :

@import vs href

 >
 
 not 
------------------------------------------------------------------------------------------------------------------------------------------------------------
Shortcuts in Visual Studio Code

Ctrl+P -  Goto File in workspace
Ctrl + G ---> Goto
------------------------------------------------------------------------------------------------------------------------------------------------------------
Error: StaticInjectorError(AppModule)[ExpansionStepsExample -> Number]:
StaticInjectorError(Platform: core)[ExpansionStepsExample -> Number]:
NullInjectorError: No provider for Number!



ERROR
Error: StaticInjectorError(AppModule)[ExpansionStepsExample -> Number]:
StaticInjectorError(Platform: core)[ExpansionStepsExample -> Number]:
NullInjectorError: No provider for Number!
Unable to display error. Open your browser's console to view.
Error: StaticInjectorError(AppModule)[ExpansionStepsExample -> Number]:
StaticInjectorError(Platform: core)[ExpansionStepsExample -> Number]:
NullInjectorError: No provider for Number!

------------------------------------------------------------------------------------------------------------------------------------------------------------
@Injectable()
  export class Foo {
    constructor(private bar:number) {
      
    }
  }
  
  providers: ????????
  ------------------------------------------------------------------------------------------------------------------------------------------------------------
  Multiple constructor implementations are not allowed.
  ------------------------------------------------------------------------------------------------------------------------------------------------------------
  https://stackoverflow.com/questions/3126995/combining-border-top-border-right-border-left-border-bottom-in-css
  
 border-color: red green white blue;
border-style: solid dashed dotted solid;
border-width: 1px 2px 3px 4px;
However, that would be quite messy. It would be more readable and maintainable with four:

border-top:    1px solid  #ff0;
border-right:  2px dashed #f0F;
border-bottom: 3px dotted #f00;
border-left:   5px solid  #09f;
  
  
  ------------------------------------------------------------------------------------------------------------------------------------------------------------
  Children Descendant??
  
  https://techbrij.com/css-selector-adjacent-child-sibling
  ------------------------------------------------------------------------------------------------------------------------------------------------------------	
  C:\IEF\CORA_AI_IEF_GUI\cora-ai-annotator-ui\node_modules\primeng\resources\themes\nova\theme.css
  node_modules\primeng\resources\themes\nova\theme.css
  
  .p-datatable .p-datatable-tbody > tr > td {
  text-align: left;
  border: 1px solid #c8c8c8;
  border-width: 1px 0 1px 0;  Top Right Bottom Left
  padding: 0.571rem 0.857rem;
}
------------------------------------------------------------------------------------------------------------------------------------------------------------

Service are not alone. Directives, pipes, components, and so on: every schematic in Angular 

------------------------------------------------------------------------------------------------------------------------------------------------------------
https://angular.io/tutorial/toh-pt3
https://run.stackblitz.com/api/angular/v1?file=src/app/heroes/heroes.component.html   V V Important
https://stackoverflow.com/questions/45749533/what-is-input-used-for-in-angular

Parent.component.html
<app-hero-detail [hero]="selectedHero"></app-hero-detail>

[hero]="selectedHero" is a property Binding

hero is @Input property of Child.Component.ts

selectedHero is existing as model in Parent.Component.ts

------------------------------------------------------------------------------------------------------------------------------------------------------------
ES6 Promises

Promise Chaining

.then
.then

https://plnkr.co/edit/?p=preview&preview
https://javascript.info/promise-chaining

------------------------------------------------------------------------------------------------------------------------------------------------------------
Injectors @Injectable

https://blog.ninja-squad.com/2016/12/08/angular-injectable/
https://www.freecodecamp.org/news/angular-dependency-injection/
https://www.freecodecamp.org/news/angular-services-and-dependency-injection-explained/
https://www.tektutorialshub.com/angular/angular-injector-injectable-inject/

------------------------------------------------------------------------------------------------------------------------------------------------------------
https://techbrij.com/css-selector-adjacent-child-sibling
https://codecraft.tv/courses/angular/http/http-with-promises/
------------------------------------------------------------------------------------------------------------------------------------------------------------
https://stackoverflow.com/questions/3126995/combining-border-top-border-right-border-left-border-bottom-in-css
------------------------------------------------------------------------------------------------------------------------------------------------------------
https://stackoverflow.com/questions/52996750/get-index-with-primng-turbotable-and-angular-6/52997364#52997364
------------------------------------------------------------------------------------------------------------------------------------------------------------