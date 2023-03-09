import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/user';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})

export class UpdateUsersComponent implements OnInit {

  Id!: number;
  user!: User;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new User();

    this.Id = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.Id).subscribe
    ({
        next : (data) => {
        console.log(data)
        this.user = data;
      }, 
      error : error => console.log(error)
    });
  }

  updateEmployee() {
    this.userService.updateUser(this.Id, this.user).subscribe
    ({
      next: data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      },
      error: error => console.log(error)
    });
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['users']);
  }
}
