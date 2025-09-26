import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../../../shared/organisms/navbar/navbar";

@Component({
  selector: 'app-home-layouts',
  imports: [RouterOutlet, Navbar],
  templateUrl: './home-layouts.html',
  styleUrl: './home-layouts.scss'
})
export class HomeLayouts {

}
