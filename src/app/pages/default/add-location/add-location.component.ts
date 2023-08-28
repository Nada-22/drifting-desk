import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  locationForm!:FormGroup;
  isSubmitted=false;

  constructor(private fb:FormBuilder,private locationService:LocationService) { }

  ngOnInit(): void {
    this.locationForm=this.fb.group({
      lat: ['', [Validators.required,]],
      lon: ['', [Validators.required]],
    });

  }


  get f(){
    return this.locationForm.controls;
  }


  onSubmit(){

    this.isSubmitted=true;
    if (this.locationForm.invalid) return
    this.getLocation();
  }
  getLocation(){
this.locationService.getLocation(this.locationForm.value.lat,this.locationForm.value.lon).subscribe({
  next:(res:any)=>{

    console.log(res);
    
  },error:(err:any)=>{
    console.log(err);
    
  }
})
  }
}
