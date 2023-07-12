import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpecialBatches } from 'src/SpecialBatches';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-admin-special',
  templateUrl: './admin-special.component.html',
  styleUrls: ['./admin-special.component.css']
})
export class AdminSpecialComponent {
  events : SpecialBatches[] =[];

  constructor(private ser: EventService,private router:Router){}
  
  ngOnInit() :void{
  this.getSpecial();
  
  }
  
  Update(_id:any){
    this.ser.UpdateEvent(_id,this.events);
    this.router.navigate(['admin/adminspecial/editspecial',_id]);
  }
  
  private getSpecial(){
    this.ser.getSpecialEvents().subscribe((data : any) => {
      this.events = data;
    });
  }

  Delete(_id: number) {
    this.ser.deleteSpecial(_id).subscribe(
      (data) => {
        console.log(data);
        this.getSpecial();
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
