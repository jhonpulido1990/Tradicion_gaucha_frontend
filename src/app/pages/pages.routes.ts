import { Routes } from "@angular/router";
import { HomeLayouts } from "./layouts/home-layouts/home-layouts";
import { LoginLayouts } from "./layouts/login-layouts/login-layouts";
import { AdminLayouts } from "./layouts/admin-layouts/admin-layouts";
import { Home } from "./home/home";
import { Catalog } from "./catalog/catalog";
import { Detail } from "./detail/detail";
import { Cart } from "./cart/cart";
import { Form } from "./form/form";
import { Login } from "./login/login";
import { Recover } from './recover/recover';
import { Categories } from "./categories/categories";
import { Products } from "./products/products";
import { Profile } from "./profile/profile";
import { Users } from "./users/users";
import { Wishlist } from "./wishlist/wishlist";
import { Contact } from "./contact/contact";

export const PageRoutes: Routes = [
  {
    path: '',
    component: HomeLayouts,
    children: [
      {
        path: '',
        component: Home,
        /* data: {
          title: 'Home',
          description: 'Welcome to the home page',
          keywords: 'home, welcome',
          author: 'John Doe',
          robots: 'index, follow',
          viewport: 'width=device-width, initial-scale=1',
          charset: 'UTF-8',
          'og:title': 'Home',
          'og:description': 'Welcome to the home page',
          'og:image': 'assets/images/home.jpg',
          'og:url': 'https://www.example.com/home',
          'twitter:card': 'summary_large_image',
          'twitter:title': 'Home',
          'twitter:description': 'Welcome to the home page',
          'twitter:image': 'assets/images/home.jpg',
          'twitter:url': 'https://www.example.com/home',
        } */
      },
      {
        path: 'catalogo',
        component: Catalog,
      },
      {
        path: 'producto',
        component: Detail,
      },
      {
        path: 'carrito',
        component: Cart
      },
      {
        path: 'formulario',
        component: Form
      },
      {
        path: 'contacto',
        component: Contact
      }
    ]
  },
  {
    path: 'login',
    component: LoginLayouts,
    children: [
      {
        path: '',
        component: Login
      },
      {
        path: 'registro',
        component: Recover
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayouts,
    children: [
      {
        path: '',
        component: Categories
      },
      {
        path: 'productos',
        component: Products
      },
      {
        path: 'perfil',
        component: Profile
      },
      {
        path: 'usuarios',
        component: Users
      },
      {
        path: 'deseos',
        component: Wishlist
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export default PageRoutes;
