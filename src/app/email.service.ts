
// Component already includes Injectable keyword 
// So courses service didn't need it
import { Injectable } from '@angular/core'; 


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
