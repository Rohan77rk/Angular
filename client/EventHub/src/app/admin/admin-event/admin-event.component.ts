import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Batches } from 'src/Batches';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent {
  events : Batches[] =[];

constructor(private ser: EventService,public _auth : AuthService,private router:Router){}

ngOnInit() :void{
this.getEvents();

}

Update(_id:any){
  this.ser.UpdateEvent(_id,this.events);
  this.router.navigate(['admin/adminevent/editevent',_id]);
}

private getEvents(){
  this.ser.getEvents().subscribe((data : any) => {
    this.events = data;
  });
}

Delete(_id: number) {
  this.ser.deleteEvent(_id).subscribe(
    (data) => {
      console.log(data);
      this.getEvents();
    },
    (error) => {
      console.error(error);
      // Handle the error here
      if (error.status === 404) {
        // Handle not found error
        // Display an appropriate message to the user
      } else {
        // Handle other error scenarios
        // Display a generic error message or perform any other action as needed
      }
    }
  );
}

}
