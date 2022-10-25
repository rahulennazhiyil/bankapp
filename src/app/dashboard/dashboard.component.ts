import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user=""

  // acnum=""
  // pswrd=""
  // amnt=""

  // acnum1=""
  // pswrd1=""
  // amnt1=""
  

  sDetails:any
  
  acnum:any

  depositForm=this.fb.group({
    acnum:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pswrd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })

  withdrawForm=this.fb.group({
    acnum1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pswrd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })



  constructor(private ds:DataService, private fb:FormBuilder,private router:Router) 
  { 
    if(localStorage.getItem('currentUser')){
      this.user=JSON.parse(localStorage.getItem('currentUser') || '')
    }
    
    this.sDetails=new Date()
  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentacno')){
      alert('please login first')
      this.router.navigateByUrl('')
    }
  }

  deposit(){
    var acnum=this.depositForm.value.acnum
    var pswrd=this.depositForm.value.pswrd
    var amnt=this.depositForm.value.amnt

    if(this.depositForm.valid){
      this.ds.deposit(acnum,pswrd,amnt).subscribe((result:any)=>{

   
        alert(result.message)
      },
      result=>{
        alert(result.error.message)
      }
      )
      }
  else{
    alert('invaild form')
  }
    
  }


  withdraw(){
    var acnum=this.withdrawForm.value.acnum1
    var pswrd=this.withdrawForm.value.pswrd1
    var amnt=this.withdrawForm.value.amnt1
    
    if(this.withdrawForm.valid){
      this.ds.withdraw(acnum,pswrd,amnt).subscribe((result:any)=>{

   
        alert(result.message)
      },
      result=>{
        alert(result.error.message)
      }
      )
      }
  else{
    alert('invaild form')
  }
  }
  
  logout(){
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentacno')
    this.router.navigateByUrl('token')

    this.router.navigateByUrl('')

  }

  deleteconfirm(){
    this.acnum=JSON.parse(localStorage.getItem('currentacno') || '')
  }

  oncancel(){
    this.acnum=""
  }

  onDelete(event:any){
  //  alert(event)
  this.ds.deleteAcc(event).subscribe((result:any)=>{
    alert(result.message)
    // this.router.navigateByUrl('')
    this.logout()
  },
  result=>{
    alert(result.error.message)
  })
  }

}
