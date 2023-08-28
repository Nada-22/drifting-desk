import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations:any[]=[];
  constructor(private locationService:LocationService) { }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  getCurrentLocation(){

    this.locationService.currentLocation$.subscribe(
      (location:any)=>{
        let locationIndex=this.locations?.findIndex(x=>x.id==location.id)
        
        if (locationIndex==-1) {
          
          this.locations.push(location);
        }
        console.log(this.locations);
        
      }
    )
  }
}
