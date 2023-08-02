import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Feedback } from '../model/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  toppings = new FormControl('');

  toppingList: string[] = ["Hunts Ville", "Spring Dale", "Orlando", "Augusta", "New York"];

  feedback:Feedback={
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    location: '',
    comments: '',
    rating: 0
  };

  constructor (private _snackBar: MatSnackBar){ }

  ngOnInit(): void {
  }
  
  onSubmit(feedbackForm:any)
  {
    this._snackBar.open('Feedback submitted successfully', 'success', {​
      duration: 5000,​
      panelClass: ['mat-toolbar', 'mat-primary']​
      })
  }

}
