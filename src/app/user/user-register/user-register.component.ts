import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';

import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  //, private userService: UserServiceService
  constructor(private fb: FormBuilder, 
    private userService: UserServiceService,
    private alertify: AlertifyService ) { }

  ngOnInit() {
    /* this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]), 
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10)]) 
   }); */
   this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registerationForm= this.fb.group({
      userName: [null,Validators.required],
      email:[null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      mobile: [null, [Validators.required, Validators.minLength(10)]]
    });
  }
  userData():User{
    return this.user = {
      userName: this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile: this.mobile.value
    }
  }


  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    this.userSubmitted=true;
    if(this.registerationForm.valid){
      console.log(this.registerationForm.value);
      //this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.registerationForm.reset()
      this.userSubmitted=false;
      this.alertify.success("Registered Succesfully");
    }else{
      this.alertify.error("Kindly provide the required fields")
    }
  }
  
}
