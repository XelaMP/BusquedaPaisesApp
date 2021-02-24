import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country [] = [];

  regiones: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  constructor(private paisService: PaisService) { }

  getClassCss (region: string){
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
   buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarRegion(termino).
    subscribe(paises =>{

      this.paises = paises;



    },(err) =>{
      this.hayError = true;
      this.paises = [];
    });

  }

  activarRegion(region: string){
    if(region  === this.regionActiva){
      return;

    }
    this.regionActiva = region;
    this.paises = [];
    this.buscar(region)

  }


}
