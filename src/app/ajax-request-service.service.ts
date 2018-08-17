import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AjaxRequestServiceService {



  MonthlySpecClinicAssign;
  Id = 1;
  ListOfAllSpecialities;
  ListOfAllClinics;
  Geturl = 'http://192.168.100.12:3000/api/getSpecialitiesForSup/' + this.Id;
  PostUrl =  'http://192.168.100.12:3000/api/Spec_Assigns/api/getspecassigns?specs=[4]&clinics=[2]&daterange=["2018-08-07","2018-08-08"]';

  constructor(private Http: HttpClient) {
      this.AjaxRequestForAllDoctorsList();
      this.AjaxRequestForAllClinicsList();
  }

  AjaxRequestForAllDoctorsList (){
    this.ListOfAllSpecialities = ['Medical', 'Accu', 'PT', 'Chiropractic'];
    // return this.Http.get(this.Geturl).subscribe(data => (console.log(data)));
  }


  AjaxRequestForAllClinicsList (){
    this.ListOfAllClinics = ['Ordopedix', 'Shahrukh-Pedix', 'Annas-Pedix', 'Cardeology' ];
  }


  AjaxRequestForRetrievingAssignments(){
    //  return this.Http.get(this.PostUrl).subscribe(data => {
     console.log(data);
    });


  }
}
