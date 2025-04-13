import { Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';



export interface intContact{

idFor:string;
tital:string;
type:string;

} 
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  titalPage: string = 'contact section';

  contacts: intContact[] = [
    { idFor: 'userName', tital: 'Username', type: 'text' },
    { idFor: 'userAge', tital: 'Age', type: 'text' },
    { idFor: 'userEmail', tital: 'Email', type: 'email' },
    { idFor: 'userMessage', tital: 'Message', type: 'textarea' }
  ];

  ShowMsg: boolean = false;
  @ViewChildren('myInput', { read: ElementRef }) myInputs: QueryList<ElementRef> | undefined;

  onSubmit(): void {

    this.myInputs?.toArray().forEach(input => {
      input.nativeElement.value = '';
    });

    this.ShowMsg = true;
    setTimeout(() => {
      this.ShowMsg = false;
    }, 1500);

  }
  
}
