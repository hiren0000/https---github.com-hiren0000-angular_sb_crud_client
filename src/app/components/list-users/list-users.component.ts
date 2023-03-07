import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit
{
   users!: Observable<User[]>;

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() 
  {
    let resp = this.userService.getUsersList();
   
    resp.subscribe({
      next: (data)=>{
        this.users=data;
        console.log(this.users);
      },
      error: error=>
      {
        console.log(error);

      }
      

    });
  }

 /* reloadData() 
  {
    this.users = this.userService.getUsersList();
  }
*/

 /* deleteUser(Id: number) 
  {
    this.userService.deleteUser(Id).subscribe({
       next: (data) => {
          console.log(data);
          this.reloadData();
        },
        error: (error) => console.log(error)
      });
  }

  UserDetails(Id: number){
    this.router.navigate(['details', Id]);
  }
*/
}
