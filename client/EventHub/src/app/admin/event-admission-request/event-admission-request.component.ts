import { Component } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { eventAdmission } from 'src/eventAdmission';

@Component({
  selector: 'app-event-admission-request',
  templateUrl: './event-admission-request.component.html',
  styleUrls: ['./event-admission-request.component.css']
})
export class EventAdmissionRequestComponent {

  events : eventAdmission[] =[];

  constructor(private ser: EventService){}
  
  ngOnInit() :void{
  this.getEventAdmission();
  
  }
  
  private getEventAdmission(){
    this.ser.getEventAdmission().subscribe((data : any) => {
      this.events = data;
    });
  }

  Delete(_id: number) {
    this.ser.deleteEventAdmission(_id).subscribe(
      (data) => {
        console.log(data);
        this.getEventAdmission();
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
