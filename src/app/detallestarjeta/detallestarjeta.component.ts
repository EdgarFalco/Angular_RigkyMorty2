import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-detallestarjeta',
  templateUrl: './detallestarjeta.component.html',
  styleUrls: ['./detallestarjeta.component.css'],
})
export class DetallestarjetaComponent implements OnInit {
  personajes: any = null;
  id: any = null;

  constructor(
    private ruta: ActivatedRoute,
    private personajesService: PersonajesService
  ) {}

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');

    this.personajesService
      .getById(this.id)
      .subscribe((result) => (this.personajes = result));
  }
}
