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
   users:any = [];

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() 
  {
    // let resp = this.userService.getUsersList();
   
    // resp.subscribe({
    //   next: (data)=>{
    //     this.users=data;
    //     console.log(this.users);
    //   },
    //   error: error=>
    //   {
    //     console.log(error);

    //   }
      

    // });


    this.userService.getUsersList().subscribe((res:any) => {
      console.log('RESS', res);
      this.users= res; 
      
    },
    error => {
      console.log("@error", error);
    });

  }

 /*----- Once list started dont forget about adding update funtions 
 
 reloadData() 
  {
    this.users = this.userService.getUsersList();
  }
*/

  deleteUser(id: number) 
  {
    this.userService.deleteUser(id).subscribe({
       next: (data) => {
          console.log(data);
          this.list();
          this.user_li();
          
        },
        error: (error) => console.log(error)
      });
  }

  userDetails(id: number){
    console.log("trying to fetch the specific records details");
    this.router.navigate(['details', id]);
   
    
  }


  updateUser(id: number)
  {
    console.log("tryting to use update function")
    this.router.navigate(['update-user', id]);
  }

  list()
  {
    this.userService.getUsersList();
  }

  //just to work here after deletation it should give me refreshed page with actual data
  user_li()
  {
    this.router.navigate(['users']);
  }



}
