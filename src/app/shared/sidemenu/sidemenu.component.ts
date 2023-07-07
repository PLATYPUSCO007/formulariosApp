import { Component } from '@angular/core';

interface MenuItem {
  text: string,
  url: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  menuTemplate: MenuItem[] = [
    {
      text: 'Básicos',
      url: 'template/basicos'
    },
    {
      text: 'Dinámicos',
      url: 'template/dinamicos'
    },
    {
      text: 'Switches',
      url: 'template/switches'
    },
  ];

  menuReactive: MenuItem[] = [
    {
      text: 'Básicos',
      url: 'reactive/basicos'
    },
    {
      text: 'Dinámicos',
      url: 'reactive/dinamicos'
    },
    {
      text: 'Switches',
      url: 'reactive/switches'
    },
  ]

  menuAuth: MenuItem[] = [
    {
      text: 'Registro',
      url: 'auth/registro'
    },
    {
      text: 'Login',
      url: 'auth/login'
    },
  ]

}
