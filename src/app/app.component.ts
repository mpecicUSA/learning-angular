//Imports
import { Component } from '@angular/core'
import{ ProductListComponent } from './products/product-list.componet';


// Decorator 
@Component({
  // selector is what the app will be called within index.html
  selector: 'pm-root', 
  // template what html will be inserted into the index.html
  template:
  `
  <div>
    <h1>
    {{pageTitle}}
    </h1>
    <pm-products></pm-products>
  </div>
  `
})
// Class
// Follow PascalCasing followed with Componenet 
export class AppComponent {
  //properties
  pageTitle: string = "Sladja's Toy Store";
  //methods (if any)

}