import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Veiculo } from './model/veiculo';
import { Cor } from './model/cor';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  displayedColumns: string[] = ['actionsColumn', 'veiculoId', 'placa', 'renavan', 'chassi', 'marca', 'modelo', 'ano', 'cor'];
  
  public veiculoModel: Veiculo = new Veiculo();
  public veiculoList: Array<Veiculo>;
  public coresList: any;
  public dataSource: any;
  public cor: Cor;
  public corSelId: number;
  public corSel: Cor = new Cor;


  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { } 

  ngOnInit() {
    this.veiculoList = new Array<Veiculo>();
    this.carregaCores();
  }

  salvarVeiculo(){
    let veiculo = new Veiculo();

    console.log("Veiculo Salvo")
    console.log(this.veiculoModel);
    this.veiculoList.push(this.veiculoModel);
    console.log("Lista de Veiculos");
    console.log(this.veiculoList);
    this.veiculoModel = new Veiculo(); 
    this.dataSource = new MatTableDataSource<Veiculo>(this.veiculoList);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

  carregaCores(){
    this.coresList = new Array<Cor>();
    this.cor = new Cor();
    this.cor.corId = 1;
    this.cor.descricao = "Branco";
    this.coresList.push(this.cor);

    this.cor = new Cor();
    this.cor.corId = 2;
    this.cor.descricao = "Preto";
    this.coresList.push(this.cor);

    this.cor = new Cor();
    this.cor.corId = 3;
    this.cor.descricao = "Prata";
    this.coresList.push(this.cor);


  }

  aplicarFiltro(valor: string){
    valor = valor.trim(); // Remove whitespace
    valor = valor.toLowerCase();

    console.log("realiza o filtro com "+valor);
    this.dataSource.filterPredicate = (data: Veiculo, filter: string ) => 
      data.veiculoId.toString().indexOf(filter) != -1 ||
      data.placa.toLowerCase().indexOf(filter) != -1 ||
      data.renavan.toString().indexOf(filter) != -1 ||
      data.chassi.toLowerCase().indexOf(filter) != -1 ||
      data.marca.toLowerCase().indexOf(filter) != -1 ||
      data.ano.toString().indexOf(filter) != -1 ||
      data.cor.toString().indexOf(filter) != -1 ;
    
  
    this.dataSource.filter = valor;
  }

  editar(veiculoId: number){
    alert("Editarrrrrrrrrrrr ==> "+veiculoId);
    let pessoaUpdate;
    this.veiculoList.forEach(item => {
      if (item.veiculoId == veiculoId) {
        pessoaUpdate = item;
      }
    });
    this.veiculoModel = pessoaUpdate;
  }


}
