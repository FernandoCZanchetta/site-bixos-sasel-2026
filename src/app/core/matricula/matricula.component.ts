import { Component } from '@angular/core'
import { ImageGridItemModel } from '@models'

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
})
export class MatriculaComponent {
  fuvestCalendar: ImageGridItemModel[] = [
    {
      image: {
        alt: 'Calendário de Chamadas da FUVEST',
        src: '/assets/images/matricula/calendariofuvestchamadas.jpg',
      },
      fill: true,
    },
    {
      image: {
        alt: 'Calendário de Listas de Espera da FUVEST',
        src: '/assets/images/matricula/calendariofuvestesperas.jpg',
      },
      fill: true,
    },
  ]
}
