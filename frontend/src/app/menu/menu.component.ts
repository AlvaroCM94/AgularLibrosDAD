import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { 
    /*let urlCompleta = window.location.href;
    let urlSplit = urlCompleta.split("/");
    let urlActual = urlSplit[urlSplit.length - 1];
    console.log(urlActual);

    if(urlActual === "Usuario" ||
       urlActual === "Configuracion" ||
       urlActual === "Hechos" ||
       urlActual === "Cancelados"){
      this.hideMenu1();
    }else{
      this.hideMenu2();
    }*/
    
  }

  ngOnInit(): void {
    
  }

  /*hideMenu1(){
    let menu1 = document.getElementsByClassName("menu1") as HTMLCollectionOf<HTMLElement>;
    let menu2 = document.getElementsByClassName("menu2") as HTMLCollectionOf<HTMLElement>;
    //document.getElementById('menu0').style.display = "none";

    for(let i = 0; i < menu1.length; i++){
      menu1[i].style.display = "none";
      menu2[i].style.display = "block";
    }
    console.log("entra");
  }

  hideMenu2(){
    let menu1 = document.getElementsByClassName("menu1") as HTMLCollectionOf<HTMLElement>;
    let menu2 = document.getElementsByClassName("menu2") as HTMLCollectionOf<HTMLElement>;

    for(let i = 0; i < menu1.length; i++){
      menu1[i].style.display = "block";
      menu2[i].style.display = "none";
    }
    console.log("y aqui");
  }*/

}
