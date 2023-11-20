import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  emp:any[];

  constructor(){
    this.emp=
      [
      {code:'emp01',name:'dinesh',gender:'male',salary:25000,dateOfBirth:'06/25/1996'},
      {code:'emp02',name:'rinku',gender:'male',salary:35000,dateOfBirth:'06/25/1990'},
      {code:'emp03',name:'anuj',gender:'male',salary:55000,dateOfBirth:'06/25/1991'},
      {code:'emp04',name:'sanjeet',gender:'male',salary:60000,dateOfBirth:'06/25/1997'},
      {code:'emp04',name:'umesh',gender:'male',salary:80000,dateOfBirth:'06/25/1992'},
    ];
  }
  ngOnInit(): void {
    
  }
}
