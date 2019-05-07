import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { DeptGen } from 'src/app/models/DeptGen';
import { UserStruct } from 'src/app/models/UserStruct';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
operation:String ;
  cin_user :String ; 
  constructor(private homeService : HomeService) {
  }
  depart:String="" ; 
  dep:DeptGen = new DeptGen();
  dept: UserStruct; 

  DeptOfUsername(){

    console.log("dkhalna lfonctions dept")
    this.homeService.getDept(this.cin_user).subscribe(
      data => { this.dept=data;
        let key = 'deptGen';
        localStorage.setItem(key, JSON.stringify(this.dept));
      }
    ,
      error => {console.log(error); } , 
      () => {console.log("loading username was done") ; }
    )}
  
  
  ngOnInit() {
    this.cin_user = localStorage.getItem('username');
    console.log("username: "+this.cin_user) ; 
    this.DeptOfUsername() ; 
    var DeptGenVal = localStorage.getItem('deptGen') ; 
    var data = JSON.parse(DeptGenVal) ; 
    console.log('libelee arabe ',data.departement.libA) ;
    this.depart=data.departement.libA;
  }

}
