import { Component } from '@angular/core'
import { ImageGridItemModel } from '@models'
import { SidebarService } from '@services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  sponsorsImages: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/cardinali.svg',
        alt: 'Cardinali',
        caption: 'Cardinali',
      },
      url: 'https://www.cardinali.com.br',
    },
    {
      image: {
        src: '/assets/images/home/cicbeu.svg',
        alt: 'CICBEU',
        caption: 'CICBEU',
      },
      url: 'https://www.cicbeu.com.br/',
    },
  ]
  constructor(public sidebarService: SidebarService) {}
}
