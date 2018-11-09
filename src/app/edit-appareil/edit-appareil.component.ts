import { Component, , NgForm, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

	defaultOnOff = 'éteint';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
  	console.log(form.value)
  }

}