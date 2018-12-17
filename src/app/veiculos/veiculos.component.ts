import { Component, OnInit } from '@angular/core';
import { VEICULOS } from '../mock-veiculos';
import { Veiculo } from '../veiculo';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  selectedVeiculo: Veiculo;
  onSelect(veiculo: Veiculo): void {
    this.selectedVeiculo = veiculo;
  }

  constructor() { }

  ngOnInit() {
  }

}