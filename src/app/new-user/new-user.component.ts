import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/User.models';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

	userForm: FormGroup;

  constructor(private formbuilder: FormBuilder,
  						private userService : UserService,
  						private router: Router) { }

  ngOnInit() {
  	this.initForm()
  }

  initForm() {
  	this.userForm = this.formbuilder.group( {
  		firstName: ['', Validators.required],
  		lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email] ],
      drinkPreference: ['', Validators.required]
  	});
  }

  onSubmitForm(){
  	const formValue = this.userForm.value;
  	const newUser = new User(
  		formValue['firstName'],
  		formValue['lastName'],
  		formValue['email'],
  		formValue['drinkPreference'],
  		);
  	this.userService.addUser(newUser);
  	this.router.navigate(['/users']);
  }

}
