import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  his: { name: string ,email:string,subject:string ,message:string}[] = []
  add = (name: string,email:string,subject:string,message:string) => {
    this.his.push({ name,email,subject,message})
    return 1;
  }
  getenquires = () => {
    return this.his;
  }
  constructor() { }
}
