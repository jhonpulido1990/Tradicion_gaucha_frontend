import { Component } from '@angular/core';
import { CategoriesTemplate } from "../../shared/templates/categories-template/categories-template";

@Component({
  selector: 'app-categories',
  imports: [CategoriesTemplate],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {

}
