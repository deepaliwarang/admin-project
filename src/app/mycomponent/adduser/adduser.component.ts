import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlCallService } from 'src/app/service/url-call.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  data: any;
  id: any;
  submitted = false;
  ngForm: FormGroup;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['firstName', 'lastName', 'maidenName', 'email', 'edit', 'delete'];

  constructor(private urlcall: UrlCallService,private router: Router, private _fb: FormBuilder, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.ngForm = this._fb.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      birthDate: ['', Validators.required],
      height: ['', Validators.required],
      university: ['', Validators.required]

    });
   
  }

 
  addusers(){
    this.urlcall.adduser(this.data).subscribe((data:any) => {
      console.log(data);
      alert('User added successfully!!');
      
    });
  }
}



