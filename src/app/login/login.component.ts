import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acnt="enter your acc number"
  aim="Your Perfect banking Partner "

  acno=""
  psw=""

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]

  })



  constructor(private router:Router,private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    var acnum=this.loginForm.value.acno
    var psw=this.loginForm.value.psw

    if(this.loginForm.valid){
      this.ds.login(acnum,psw).subscribe((result:any)=>{
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem('currentacno',JSON.stringify(result.currentacno))
        localStorage.setItem('token',JSON.stringify(result.token))
         alert(result.message)
        this.router.navigateByUrl('dashboard') 
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



//   login(a:any,b:any){
// // console.log(a.value);
// // console.log(b.value);

//     var acnum=a.value
//     var psw=b.value
//     let userDetails=this.userDetails
//     if(acnum in userDetails){
//       if(psw==userDetails[acnum]['pass']){
//         alert('Login Successfully')
//       }
//       else{
//         alert('incorrect password')
//       }
//     }
//     else{
//       alert("user doesn't exist or incorrect account number")
//     }
//   }


  // accnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno);
    

  // }
  // passChange(event:any){
  //   this.psw=event.target.value
  //   console.log(this.psw);
    
  // }

}
