import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
islogin: boolean = true;
constructor() { }

isAuthenticates(){
  const promise = new Promise<boolean>((resovle, reject)=>{
    setTimeout(()=>resovle(this.islogin), 200);
  });
  return promise;
}

login(){
  this.islogin = true;
}
logout(){
  this.islogin = false;
}

}
