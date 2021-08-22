import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  User: any  =[];
  

  constructor(
    public userService: UserService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.loadlist();

  }

   loadlist() {
      return this.userService.getUsers().subscribe((data: {}) => {
        this.User = data;
        console.log(this.User)
      })

   }

}
