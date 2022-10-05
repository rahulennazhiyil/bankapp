import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any
  currentacno: any

  userDetails: any = {
    1000: { acno: 1000, username: "amal", pass: 123, balance: 10000, transaction: [] },
    1002: { acno: 1002, username: "anu", pass: 123, balance: 20000, transaction: [] },
    1003: { acno: 1003, username: "abi", pass: 123, balance: 30000, transaction: [] },
    1004: { acno: 1004, username: "arun", pass: 123, balance: 40000, transaction: [] }

  }

  constructor() { }

  register(acno: any, username: any, pass: any) {
    let userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { acno, username, pass, balance: 0 }
      console.log(userDetails);

      return true
    }
  }



  login(acnum: any, psw: any) {
    let userDetails = this.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]['pass']) {
        this.currentUser = userDetails[acnum]['username']
        this.currentacno = acnum
        return true
        // alert('Login Successfully')
        // //redirection
        // this.router.navigateByUrl('dashboard')

      }
      else {
        alert('incorrect password')
        return false

      }
    }
    else {
      alert("user doesn't exist or incorrect account number")
      return false
    }
  }

  deposit(acnum: any, pswrd: any, amnt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amnt)   //to convert string to number 
    if (acnum in userDetails) {
      if (pswrd == userDetails[acnum]['pass']) {
        userDetails[acnum]['balance'] += amount
        userDetails[acnum]['transaction'].push({ type: 'Credit', amount })
        return userDetails[acnum]['balance']
      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('user not exist')
      return false
    }
  }


  withdraw(acnum: any, pswrd1: any, amnt1: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amnt1)
    if (acnum in userDetails) {
      if (pswrd1 == userDetails[acnum]['pass']) {
        if (amount<userDetails[acnum]['balance']) {
          userDetails[acnum]['balance'] = userDetails[acnum]['balance']- amount
          userDetails[acnum]['transaction'].push({ type: 'Debit', amount })
          return userDetails[acnum]['balance']
        }
        else {
          alert('insufficient balance')

        }
      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('user not exist')
      return false
    }
  }


  getTransaction(acno: any) {
    return this.userDetails[acno]['transaction']
  }


}

