import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UrlCallService } from 'src/app/service/url-call.service';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],

})
export class UserslistComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  // displayedColumns: string[] = ['id'];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'maidenName', 'email','actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private urlcall: UrlCallService) {

  }

  ngOnInit() {
    debugger
    this.urlcall.getUsers().subscribe((data: any) => {
      debugger
      console.log("data", data);
      const limit = 10; // Change this as needed

      this.dataSource.data = data.users;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteUser(id: any) {
    debugger
    console.log(id);
    // this.collection.splice(item-1,1);
    this.urlcall.deleteRequest(id).subscribe((data: any) => {
      console.log(data);
      this.getuser();

    });
  }

  getuser() {
    this.urlcall.getUsers().subscribe((data: any) => {
      debugger
      console.log("data", data);
      const limit = 10; // Change this as needed

      this.dataSource.data = data.users;

    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



