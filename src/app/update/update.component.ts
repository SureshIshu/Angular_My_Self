import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  userData: any = {};


  constructor(public userService: UserService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {

    this.userService.getUser(this.id).subscribe((data: {})=>{
      this.userData = data;

    })
  }



}
