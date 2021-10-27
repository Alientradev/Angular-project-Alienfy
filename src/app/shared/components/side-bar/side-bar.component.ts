import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

mainMenu: {
  defaultOptions: Array<any>,
  accessLink: Array<any>
} = {
  defaultOptions: [],
  accessLink: []}

customOptions: Array<any> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Inicio',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Mi biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Canciones favoritas',
        icon: 'uil-heart-medical'
      },
      {
        name: 'Crear lista nueva',
        icon: 'uil-plus-square'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista 1',
        icon: 'uil uil-list-ul',
        router: ['/']
      },
      {
        name: 'Mi lista 2',
        icon: 'uil uil-list-ul',
        router: ['/']
      },
      {
        name: 'Mi lista 3',
        icon: 'uil uil-list-ul',
        router: ['/']
      },
      {
        name: 'Mi lista 4',
        icon: 'uil uil-list-ul',
        router: ['/']
      }
    ]

  }

  // goTo($event: any): void {
  //   this.router.navigate(['/', 'favorites'], {
  //     queryParams: {
  //       key1: 'value1',
  //       key2: 'value2',
  //       key3: 'value3'
  //     }
  //   })
  //   console.log($event)
  // }

}

