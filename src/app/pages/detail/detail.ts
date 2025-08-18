import { Component } from '@angular/core';
import { DetailTemplate } from "../../shared/templates/detail-template/detail-template";

@Component({
  selector: 'app-detail',
  imports: [DetailTemplate],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})
export class Detail {

}
