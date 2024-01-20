import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    console.log("Am there");
    
  }
  constructor(private router:Router){

  }

  onNavigateByApercu(){
    this.router.navigateByUrl('home/overview')

  }

  onNavigateByVente(){
    this.router.navigateByUrl('home/vente')
  }

  featureNotImplemented(){
    Notify.info("la fonctionalite n'est pas encore implemente");
  }


}
