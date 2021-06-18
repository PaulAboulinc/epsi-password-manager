import { Component, OnInit } from '@angular/core';
import { PasswordUser, User } from '../../models/models';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-password-dashboard',
  templateUrl: './password-dashboard.component.html',
  styleUrls: ['./password-dashboard.component.scss']
})
export class PasswordDashboardComponent implements OnInit {

  label : string;
  password : string;

  password_user : PasswordUser[] = [
    {label: "FB", password: 'Hydrogen'},
    {label: "APPEL", password: 'Hydrogen2'},    
  ];

  constructor() { }
  displayedColumns: string[] = ['label', 'password', 'action'];
  dataSource = new MatTableDataSource<PasswordUser>([]);
  incompleteInput : boolean = false;

  ngOnInit(): void {    
    this.refreshTable()
  }

  addPassword() : any{

    // ADD WITH SERVICE, IF OK PUSH IN TAB

    if(!this.label || !this.password){
      this.incompleteInput = true;
      setTimeout(() => {
        this.incompleteInput = false;
      }, 5000);
      return 
    }
    
    this.password_user.push({
      label : this.label,
      password : this.password
    })    
    this.refreshTable()
  }

  refreshTable() : any{
    this.dataSource.data = this.password_user    
  }

  removePassword(passwordUser : PasswordUser){
    this.password_user = this.password_user.filter((password)=>{
      return password.label !== passwordUser.label
    });
    this.refreshTable()    
  }

  

}
