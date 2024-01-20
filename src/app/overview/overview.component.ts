import { Component, OnInit } from '@angular/core';
import { Ventes } from '../Data/data';
import { vente } from '../Data/ValueVente';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{

  venteValue = vente;
  data = Ventes
  ngOnInit(): void {
    this.iterateData()
  
  }

  iterateData(){
    this.data.forEach(element => {
      console.log(element);
      this.venteValue.push({val: element.numero_commande, arg: element.date_de_commande})
    }); 
    console.log(this.venteValue);
    
  }
  
}
