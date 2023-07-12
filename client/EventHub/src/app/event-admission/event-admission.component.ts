import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Batches } from 'src/Batches';
import { eventAdmission } from 'src/eventAdmission';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event-admission',
  templateUrl: './event-admission.component.html',
  styleUrls: ['./event-admission.component.css']
})
export class EventAdmissionComponent {
  events : Batches[] =[];
  StudentData : eventAdmission= new eventAdmission();

  
  constructor(private _event : EventService,public fobj : FormBuilder,private router : Router){}

  StudentInfo = this.fobj.group(
    {
      FirstName :['',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      LastName: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      PhoneNumber: ['',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.minLength(10),Validators.maxLength(10)]],
      Email: ['',[Validators.required,Validators.email]],
      Education:['',Validators.required],
      Address :['',[Validators.required,Validators.minLength(30)]],
      Batch : ['',Validators.required]

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
      if (this.StudentInfo.valid) {
        const formData = this.StudentInfo.value;
        this.StudentData = {

          _id : null, // Set it to null or remove it if the server generates the ID
          FirstName: formData.FirstName,
          LastName: formData.LastName,
          PhoneNumber: formData.PhoneNumber,
          Email: formData.Email,
          Education: formData.Education,
          Address : formData.Address,
          Batch : formData.Batch
        };      this._event.AddEventAdmission(this.StudentData).subscribe(data => {
          console.log(data);
          this.router.navigate(['/events']);
        });
      }
    
  
   
    }
    
}
