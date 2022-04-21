import { Component } from '@angular/core';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html'
})

export class zapatillasComponent {
	public tituloUno: string;
	public cuerpo: string;

	constructor (){
		this.tituloUno = 'componentes de video juego mor xd'
		this.cuerpo = 'tipo de juegos mas populares: X2';
	}
}
