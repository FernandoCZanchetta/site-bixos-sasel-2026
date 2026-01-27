import { Component, Input, OnInit } from '@angular/core'
import { SocialMedia, SocialMediaModel } from '@models'

@Component({
  selector: 'app-groups-panel',
  templateUrl: './groups-panel.component.html',
})
export class GroupsPanelComponent implements OnInit {
  @Input() size = 23
  @Input() color = ''

  ngOnInit(): void {
    this.color = this.color ? `text-${this.color}` : ''
  }

  groups: SocialMediaModel[] = [
    {
      name: SocialMedia.Instagram,
      url: 'https://www.instagram.com/eletrica_usp2026/',
      available: true,
    },
    {
      name: SocialMedia.WhatsAppGroup,
      url: 'https://chat.whatsapp.com/ERd1JOZ4mdu0epWQzu9WQV',
      available: true,
      warningModal: {
        title: 'Calma lá, bixão!',
        text: 'O grupo do WhatsApp ainda não está disponível...\nFique atento no nosso instagram e também aqui no nosso site para que você possa ingressar no grupo logo que ele for divulgado!\n Nossa previsão é que a abertura do grupo ocorra no sábado, dia 24/01!',
      },
    },
  ]
}
