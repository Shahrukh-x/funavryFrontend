import { Component, OnInit , Input} from '@angular/core';
import {IMyDateModel, IMyDpOptions} from 'mydatepicker';
import {AjaxRequestServiceService} from '../ajax-request-service.service';
import {MonthSchedulerComponent} from '../month-scheduler/month-scheduler.component';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {



  AllSpecialitiesList;
  AllClinicList;

  SelectedSpecialitiesList;
  SelectedClinicList;

  Con1flictView = true;
  DoctorViewClicked;
  SelectItem = false;

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    inline: true,
  };

  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor(public Screen1Ajaxrequest: AjaxRequestServiceService ) { }

  ngOnInit() {
    this.AllClinicList = this.Screen1Ajaxrequest.ListOfAllClinics;
    this.AllSpecialitiesList = this.Screen1Ajaxrequest.ListOfAllSpecialities;
    this.DoctorViewClicked = true;
    this.SelectedSpecialitiesList = [];
    this.SelectedClinicList = [];
  }

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    // this.ShareDateScheduler.Month = event.date.month;
    // this.ShareDateScheduler.Year = event.date.year;
  }

  SelectedDoctor(DoctorName){
    this.SelectedSpecialitiesList.push(DoctorName);
  }

  SelectedClinic(ClinicName){
    this.SelectedClinicList.push(ClinicName);

  }

  ClinicClicked(){
    if (this.DoctorViewClicked === true){
      this.DoctorViewClicked = false;
    } else{
      this.DoctorViewClicked = true;
    }
    return this.DoctorViewClicked;
  }

}
