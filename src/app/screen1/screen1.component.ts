import { Component, OnInit } from '@angular/core';
import {IMyDateModel, IMyDpOptions} from 'mydatepicker';
import {AjaxRequestServiceService} from '../ajax-request-service.service';
import {ScreenScedulerSharedDateServiceService} from '../screen-sceduler-shared-date-service.service';
import {MonthSchedulerComponent} from '../month-scheduler/month-scheduler.component';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {


  ConflictView = true;
  DoctorViewClicked;
  SelectItem = false;
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    inline: true,
  };
  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor(public Screen1Ajaxrequest: AjaxRequestServiceService , private ShareDateScheduler: ScreenScedulerSharedDateServiceService) { }

  ngOnInit() {
    this.DoctorViewClicked = true;
    this.ShareDateScheduler.DoctorsList = [];
  }

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    this.ShareDateScheduler.Month = event.date.month;
    this.ShareDateScheduler.Year = event.date.year;
  }

  SelectedDoctor(DoctorName){
    this.ShareDateScheduler.DoctorsList.push(DoctorName);
  }

  SelectedClinic(ClinicName){
    this.ShareDateScheduler.ClinicsList.push(ClinicName);

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
