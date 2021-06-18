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

  ngOnInit(): void {    
    this.refreshTable()
  }

  addPassword() : any{

    // ADD WITH SERVICE, IF OK PUSH IN TAB

    console.log(this.label);
    console.log(this.password);
    
    this.password_user.push({
      label : this.label,
      password : this.password
    })
    console.log(this.password_user);
    
    this.refreshTable()
  }

  refreshTable() : any{
    this.dataSource.data = this.password_user    
  }

}
