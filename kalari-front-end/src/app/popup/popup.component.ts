import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent  implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public datas: any) { 
    
  }

  message: any = ''
  heading: any = ''
  buttonvalue: any
  ngOnInit() {
    console.log("data",this.datas);
    this.heading = this.datas.heading
    this.message = this.datas.message
    this.buttonvalue = this.datas.buttonvalue
  }
}
