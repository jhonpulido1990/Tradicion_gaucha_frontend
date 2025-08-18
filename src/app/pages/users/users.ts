import { Component } from '@angular/core';
import { UsersTemplate } from "../../shared/templates/users-template/users-template";

@Component({
  selector: 'app-users',
  imports: [UsersTemplate],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {

}
