import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Batches } from 'src/Batches';
import { SpecialBatches } from 'src/SpecialBatches';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-edit-special',
  templateUrl: './edit-special.component.html',
  styleUrls: ['./edit-special.component.css']
})
export class EditSpecialComponent {
  Special : SpecialBatches[] =[];
  SpecialData : SpecialBatches = new SpecialBatches();
  _id:any;
  
  constructor(private _event : EventService,public fobj : FormBuilder,private router : Router ,private url :ActivatedRoute){}

  SpecialInfo = this.fobj.group(
    {
      name: ['',Validators.required],
      description: ['',[Validators.required]],
      Teacher: ['',[Validators.required]],
      

    }
  )
  
 
  ngOnInit() : void{
    this._id = this.url.snapshot.params['_id'];
    console.log(this._id);
    this._event.getSpecialById(this._id).subscribe((data) =>{
      console.log(data);
    this.SpecialInfo.patchValue(data);
      
    })
  }
    
  onSubmit(){
    console.log(this.SpecialInfo.value);
    this._event.UpdateSpecial(this._id,this.SpecialInfo.value).subscribe((data : any)=>{
      console.log(data);
      this.router.navigate(['admin/adminspecial']);
    })
  }
}
