import { Component, OnInit } from '@angular/core';
import{SpecialBatches} from 'src/SpecialBatches'
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit{

  SpecialEvents : SpecialBatches []=[]

constructor(public _auth : AuthService,private ser: EventService){}

ngOnInit() :void{
this.getSpecialEvents();

}

private getSpecialEvents(){
  this.ser.getSpecialEvents().subscribe((data : any) => {
    this.SpecialEvents = data;
  });
}

}
