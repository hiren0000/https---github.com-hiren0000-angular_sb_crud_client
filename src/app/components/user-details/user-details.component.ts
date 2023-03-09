import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit 
{
  
  Id!: number;
  user!: User;

  constructor(private route: ActivatedRoute, private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    
    this.Id = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.Id)
      .subscribe({
        next: (data) => {
        console.log(data)
        this.user = data;
      
      },
      error: (error) => {console.log(error)}
    });
  }

 list(){
   this.router.navigate(['users']);
 }
}


