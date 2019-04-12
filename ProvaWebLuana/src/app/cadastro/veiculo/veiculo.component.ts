import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Veiculo } from './model/veiculo';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  displayedColumns: string[] = ['actionsColumn', 'veiculoId', 'placa', 'renavan', 'chassi', 'marca', 'modelo', 'ano', 'cor'];
  
  public veiculoModel: Veiculo = new Veiculo();
  public veiculoList: Array<Veiculo>;
  public dataSource: any;


  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.veiculoList = new Array<Veiculo>();
  }

  salvarVeiculo(){
    console.log("Veiculo Salva")
    console.log(this.veiculoModel);
    this.veiculoList.push(this.veiculoModel);
    console.log("Lista de Veiculos");
    console.log(this.veiculoList);
    this.veiculoModel = new Veiculo(); //Instancia uma nova pessoa para não perder a referência da primeira0,

    //this.displayedColumns = ['pessoaId', 'nome', 'idade'];
    this.dataSource = new MatTableDataSource<Veiculo>(this.veiculoList);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }


}
