import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Batches } from 'src/Batches';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {
  events : Batches[] =[];
  EventData : Batches = new Batches();
  _id:any;
  
  constructor(private _event : EventService,public fobj : FormBuilder,private router : Router ,private url :ActivatedRoute){}

  EventInfo = this.fobj.group(
    {
      name: ['',Validators.required],
      description: ['',[Validators.required]],
      Teacher: ['',[Validators.required]],
      

    }
  )
  
 
  ngOnInit() : void{
    this._id = this.url.snapshot.params['_id'];
    console.log(this._id);
    this._event.getEventById(this._id).subscribe((data) =>{
      console.log(data);
    this.EventInfo.patchValue(data);
      
    })
  }
    
  onSubmit(){
    console.log(this.EventInfo.value);
    this._event.UpdateEvent(this._id,this.EventInfo.value).subscribe((data : any)=>{
      console.log(data);
      this.router.navigate(['admin/adminevent']);
    })
  }
}
