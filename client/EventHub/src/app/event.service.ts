import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient) { }

  uri = "http://localhost:4000/eventhub";

  // to get events

  getEvents(){
    return this.http.get(`${this.uri}/events`)
   }

// to get Special events

getSpecialEvents(){
  return this.http.get(`${this.uri}/specialevents`)
 }


 // to post admission
AddEventAdmission(body : any){
  return this.http.post(`${this.uri}/events/eventadmission`,body)
}

// to post special admission
AddSpecialAdmission(body : any){
  return this.http.post(`${this.uri}/specialevents/specialadmission`,body)
}

// to get event admissions

getEventAdmission(){
  return this. http.get(`${this.uri}/admin/eventadmissionrequest`);
}

// to get specail admissions
getSpecialAdmission(){
  return this. http.get(`${this.uri}/admin/specialadmissionrequest`);
}

// to delete event admission
deleteEventAdmission(_id : any)
 {
  return this.http.delete(`${this.uri}/admin/eventadmissionrequest/delete/${_id}`)
 }

 // to get event by ID
getEventById(_id:any){
  return this.http.get(`${this.uri}/admin/adminevent/eventedit/${_id}`)
}


 // to get special by ID
 getSpecialById(_id:any){
  return this.http.get(`${this.uri}/admin/adminspecial/specialedit/${_id}`)
}

// to delete special admission
deleteSpecialAdmission(_id : any)
 {
  return this.http.delete(`${this.uri}/admin/specialadmissionrequest/delete/${_id}`)
 }

 //to delete special
 deleteSpecial(_id : any)
 {
  return this.http.delete(`${this.uri}/admin/adminspecial/deletespecial/${_id}`)
 }

 
 //to delete event
 deleteEvent(_id : any)
 {
  return this.http.delete(`${this.uri}/admin/adminevent/deleteevent/${_id}`)
 }
 
 // to launch new batch
 LaunchBatch(body : any){
  return this.http.post(`${this.uri}/admin/event/launch`,body)
}

 // to launch new special batch
 LaunchSpecialBatch(body : any){
  return this.http.post(`${this.uri}/admin/special/launchspecial`,body)
}

//to update event

UpdateEvent(_id :any,body:any){
  return this.http.put(`${this.uri}/admin/adminevent/eventedit/updateevent/${_id}`,body)
}

//to update special

UpdateSpecial(_id :any,body:any){
  return this.http.put(`${this.uri}/admin/adminspecial/editspecial/updatespecial/${_id}`,body)
}
}