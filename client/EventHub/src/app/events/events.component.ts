import { Component,OnInit } from '@angular/core';
import { Batches } from 'src/Batches';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events : Batches[] =[];

constructor(private ser: EventService,public _auth : AuthService){}

ngOnInit() :void{
this.getEvents();

}

private getEvents(){
  this.ser.getEvents().subscribe((data : any) => {
    this.events = data;
  });
}
}
