import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Batches } from 'src/Batches';
import { SpecialBatches } from 'src/SpecialBatches';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-new-special-batch',
  templateUrl: './new-special-batch.component.html',
  styleUrls: ['./new-special-batch.component.css']
})
export class NewSpecialBatchComponent {
  Special : SpecialBatches[] =[];
  SpecialData : SpecialBatches = new SpecialBatches();

  
  constructor(private _event : EventService,public fobj : FormBuilder,private router : Router){}

  SpecialInfo = this.fobj.group(
    {
      name: ['',Validators.required],
      description: ['',[Validators.required]],
      Teacher: ['',[Validators.required]],
      

    }
  )
  
  ngOnInit() :void{
    this.getSpecial();
    
    }
    
    private getSpecial(){
      this._event.getSpecialEvents().subscribe((data : any) => {
        this.Special = data;
      });
    }
    onSubmit() {
      if (this.SpecialInfo.valid) {
        const formData = this.SpecialInfo.value;
        this.SpecialData = {
          _id:null,
          name: formData.name,
          description: formData.description,
          Teacher: formData.Teacher
        };    
        this._event.LaunchSpecialBatch(this.SpecialData).subscribe(data => {
          console.log(data);
          this.router.navigate(['admin/adminspecial']);
        });  
        
      }
    
  
   
    }

}
