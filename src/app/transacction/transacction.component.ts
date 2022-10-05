import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transacction',
  templateUrl: './transacction.component.html',
  styleUrls: ['./transacction.component.css']
})
export class TransacctionComponent implements OnInit {

  acno:any
  transaction:any


  constructor(private ds:DataService) {
    this.acno=this.ds.currentacno
    this.transaction=this.ds.getTransaction(this.acno)
    console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}
