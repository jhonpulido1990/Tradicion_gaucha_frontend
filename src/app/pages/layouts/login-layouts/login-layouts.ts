import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "../../../shared/organism/footer/footer";

@Component({
  selector: 'app-login-layouts',
  imports: [RouterOutlet, Footer],
  templateUrl: './login-layouts.html',
  styleUrl: './login-layouts.scss'
})
export class LoginLayouts {

}
