import { Component } from '@angular/core'
import { ExtracurricularGroupModel, ExtracurricularGroupTypes } from '@models'

@Component({
  selector: 'app-ic-extra',
  templateUrl: './ic-extra.component.html',
})
export class IcExtraComponent {
  extracurricularGroups: ExtracurricularGroupModel[] = [
    {
      name: 'ABUSCar',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://www.facebook.com/abusanca/',
    },
    {
      name: 'ACASO Teatro',
      categories: [ExtracurricularGroupTypes.Artistic],
      url: 'https://www.facebook.com/grupoacaso/',
    },
    {
      name: 'AIESEC - São Carlos',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://aiesec.org.br/',
    },
    {
      name: 'Atlética CAASO',
      categories: [ExtracurricularGroupTypes.Sports],
      url: 'https://linktr.ee/atleticacaaso',
    },
    {
      name: 'Baja EESC - USP',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://baja.eesc.usp.br/',
    },
    {
      name: 'CAASO',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://linktr.ee/caaso',
    },
    {
      name: 'Campanha USP do Agasalho',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://campanhauspdoagasalho.eesc.usp.br/',
    },
    {
      name: 'Centro de Voluntariado Universitário de São Carlos',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://www.facebook.com/cvusc/',
    },
    {
      name: 'Cia de Dança CAASO',
      categories: [ExtracurricularGroupTypes.Artistic],
      url: 'https://linktr.ee/ciadedancacaaso',
    },
    {
      name: 'Coletivo de Mulheres CAASO/FEDERAL',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://www.facebook.com/coletivomulherescaasoufscar/',
    },
    {
      name: 'Coletivo Negro Elza Soares',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://www.facebook.com/coletivoelzasoares/',
    },
    {
      name: 'ECon Equipe de Concreto',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://linktr.ee/econ.usp',
    },
    {
      name: 'EESC - USP Aerodesign',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://aerodesign.eesc.usp.br/',
    },
    {
      name: 'EESC - USP Formula SAE',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://formula.eesc.usp.br/',
    },
    {
      name: 'EESC - USP Mileage',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://mileage.eesc.usp.br/',
    },
    {
      name: 'EESC - USP Tupã',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://linktr.ee/TupaUsp',
    },
    {
      name: 'Empresa Junior EESC jr.',
      categories: [
        ExtracurricularGroupTypes.Technical,
        ExtracurricularGroupTypes.Business,
      ],
      url: 'http://eescjr.com.br/',
    },
    {
      name: 'Enactus CAASO - USP',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://www.instagram.com/time_uspsc/',
    },
    {
      name: 'FoCA',
      categories: [ExtracurricularGroupTypes.Artistic],
      url: 'https://www.facebook.com/grupoFoCA/',
    },
    {
      name: 'GAPeria (Bateria do CAASO)',
      categories: [ExtracurricularGroupTypes.Artistic],
      url: 'https://www.facebook.com/gaperia/',
    },
    {
      name: 'GEISA - Grupo de Estudos e Intervenções SocioAmbientais',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://www.instagram.com/geisa.usp/',
    },
    {
      name: 'GELOS - Grupo de Extensão em Livre & Open Source',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://gelos.club/sobre/',
    },
    {
      name: 'GMA - Grupo de Manutenção de Aeronaves',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://www.instagram.com/gma_eesc_usp/',
    },
    {
      name: 'GSom - Grupo de Som CAASO',
      categories: [ExtracurricularGroupTypes.Artistic],
      url: 'https://www.instagram.com/gsomcaaso/',
    },
    {
      name: 'IEEE Student Branch',
      categories: [ExtracurricularGroupTypes.Technical, ExtracurricularGroupTypes.Social],
      url: 'https://www.facebook.com/ieeeuspsc/',
    },
    {
      name: 'Liga de Empreendedorismo de São Carlos',
      categories: [ExtracurricularGroupTypes.Business],
      url: 'https://www.instagram.com/lesc_sanca/',
    },
    {
      name: 'Liga do Mercado Financeiro de São Carlos',
      categories: [ExtracurricularGroupTypes.Business],
      url: 'https://www.facebook.com/lmf.saocarlos/',
    },
    {
      name: 'NUANCES',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://linktr.ee/Nuances_CAASO',
    },
    {
      name: 'Operação Natal',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://operacaonatal.faiufscar.com/',
    },
    {
      name: 'Projeto Semente',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://semente.eesc.usp.br/',
    },
    {
      name: 'Projeto Sol',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://www.facebook.com/projetosol.sc/',
    },
    {
      name: 'SA-SEL',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://www.instagram.com/sasel.usp/',
    },
    {
      name: 'Sanca Social',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'http://sancasocial.icmc.usp.br/',
    },
    {
      name: 'Semear',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://semear.eesc.usp.br/',
    },
    {
      name: 'Topus - Pesquisas Aeroespaciais',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://sites.google.com/view/topusprojetosaeroespaciais/home',
    },
    {
      name: 'Warthog Robotics',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://wr.sc.usp.br/',
    },
    {
      name: 'Zenith - USP',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'http://zenith.eesc.usp.br/',
    },
  ]
}
