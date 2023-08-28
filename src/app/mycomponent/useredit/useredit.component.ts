import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlCallService } from 'src/app/service/url-call.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  data: any;
  id: any;
  submitted = false;
  ngForm: FormGroup;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'maidenName', 'email', 'edit', 'delete'];

  constructor(private urlcall: UrlCallService,private router: Router, private _fb: FormBuilder, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.ngForm = this._fb.group({

      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      birthDate: ['', Validators.required],
      height: ['', Validators.required],
      university: ['', Validators.required]

    });
    let id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.fetchUser();

  }

  fetchUser(): void {
    debugger
    this.urlcall.edittUsers(this.id).subscribe(user => {
      debugger
      this.data = user;
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
  updateUser(id: any) {
    debugger
    console.log(id)
    console.log(this.data);

    this.urlcall.updateCurrentData(id, this.data).subscribe(result => {
      debugger
      console.log(result);
      this.getuser();
      this.router.navigate(['/userslist']);

    })

  }
}


