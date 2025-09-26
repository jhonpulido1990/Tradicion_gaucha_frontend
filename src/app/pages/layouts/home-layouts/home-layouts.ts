import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../../../shared/organisms/navbar/navbar";
import { Footer } from "../../../shared/organisms/footer/footer";

@Component({
  selector: 'app-home-layouts',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './home-layouts.html',
  styleUrl: './home-layouts.scss'
})
export class HomeLayouts {

}
