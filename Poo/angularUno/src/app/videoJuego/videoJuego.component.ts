import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
	selector: 'videoJuego',
	templateUrl: './videoJuego.component.html'
})

export class videoJuegoComponent implements OnInit, DoCheck{
	public titulo: string;
	public listado: string;

	constructor (){
		this.titulo = 'componentes de video juego mor'
		this.listado = 'tipo de juegos mas populares:';
	}

	ngOnInit(){
		console.log('oeee ya se cargó el OnInit, melo');
	}

	ngDoCheck(){
		console.log('se ejecutó el famoso DoCheck, recuerda que este se ejectuta al haber cambios en el codigo');
	}
	cambioTitulo(){
		this.titulo = 'nuevo titulo cierto?';
	}
}