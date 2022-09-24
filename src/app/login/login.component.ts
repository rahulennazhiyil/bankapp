import { Component, OnInit } from '@angular/core';

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
  
  userDetails:any={
    1000:{acno:1000,username:"amal",pass:123,balance:10000},
    1002:{acno:1002,username:"anu",pass:123,balance:20000},
    1003:{acno:1003,username:"abi",pass:123,balance:30000},
    1004:{acno:1004,username:"arun",pass:123,balance:40000}

  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    var acnum=this.acno
    var psw=this.psw
    let userDetails=this.userDetails
    if(acnum in userDetails){
      if(psw==userDetails[acnum]['pass']){
        alert('Login Successfully')
      }
      else{
        alert('incorrect password')
      }
    }
    else{
      alert("user doesn't exist or incorrect account number")
    }
  }

  accnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    

  }
  passChange(event:any){
    this.psw=event.target.value
    console.log(this.psw);
    
  }

}
