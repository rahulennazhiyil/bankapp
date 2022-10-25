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
    this.acno=JSON.parse(localStorage.getItem('currentacno') || '')

    this.ds.getTransaction(this.acno).subscribe((result:any)=>{
      this.transaction=result.transaction
    },
    result=>{
      alert(result.error.message)
    }
    )
    }

  ngOnInit(): void {
  }

}