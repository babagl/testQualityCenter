import { Component, OnInit } from '@angular/core';
import { Ventes } from '../Data/data';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit{

  vente = Ventes
  ngOnInit(): void {
    console.log(this.vente);

  }

  


}
