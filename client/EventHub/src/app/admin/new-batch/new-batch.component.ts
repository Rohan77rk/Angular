import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Batches } from 'src/Batches';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-new-batch',
  templateUrl: './new-batch.component.html',
  styleUrls: ['./new-batch.component.css']
})
export class NewBatchComponent {
  events : Batches[] =[];
  EventData : Batches = new Batches();

  
  constructor(private _event : EventService,public fobj : FormBuilder,private router : Router){}

  EventInfo = this.fobj.group(
    {
      name: ['',Validators.required],
      description: ['',[Validators.required]],
      Teacher: ['',[Validators.required]],
      

    }
  )
  
  ngOnInit() :void{
    this.getEvents();
    
    }
    
    private getEvents(){
      this._event.getEvents().subscribe((data : any) => {
        this.events = data;
      });
    }
    onSubmit() {
      if (this.EventInfo.valid) {
        const formData = this.EventInfo.value;
        this.EventData = {
          _id:null,
          name: formData.name,
          description: formData.description,
          Teacher: formData.Teacher
        };    
        this._event.LaunchBatch(this.EventData).subscribe(data => {
          console.log(data);
          this.router.navigate(['admin/adminevent']);
        });  
        
      }
    
  
   
    }
}
