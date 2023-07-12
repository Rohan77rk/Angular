import { Component } from '@angular/core';
import { Batches } from 'src/Batches';
import { specialAdmission } from 'src/specialAdmission';
import { EventService } from '../event.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpecialBatches } from 'src/SpecialBatches';

@Component({
  selector: 'app-special-admission',
  templateUrl: './special-admission.component.html',
  styleUrls: ['./special-admission.component.css']
})
export class SpecialAdmissionComponent {
  events : SpecialBatches[] =[];
  StudentData : specialAdmission= new specialAdmission();

  
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
      this._event.getSpecialEvents().subscribe((data : any) => {
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
        };      this._event.AddSpecialAdmission(this.StudentData).subscribe(data => {
          console.log(data);
          this.router.navigate(['/specialevents']);
        });
      }
    
  
   
    }


}
