import { Component } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { specialAdmission } from 'src/specialAdmission';

@Component({
  selector: 'app-special-admission-request',
  templateUrl: './special-admission-request.component.html',
  styleUrls: ['./special-admission-request.component.css']
})
export class SpecialAdmissionRequestComponent {
  events : specialAdmission[] =[];

  constructor(private ser: EventService){}
  
  ngOnInit() :void{
  this.getSpecialAdmission();
  
  }
  
  private getSpecialAdmission(){
    this.ser.getSpecialAdmission().subscribe((data : any) => {
      this.events = data;
    });
  }

  Delete(_id: number) {
    this.ser.deleteSpecialAdmission(_id).subscribe(
      (data) => {
        console.log(data);
        this.getSpecialAdmission();
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
