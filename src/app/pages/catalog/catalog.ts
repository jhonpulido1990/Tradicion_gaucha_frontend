import { Component } from '@angular/core';
import { CatalogTemplate } from "../../shared/templates/catalog-template/catalog-template";

@Component({
  selector: 'app-catalog',
  imports: [CatalogTemplate],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class Catalog {

}
