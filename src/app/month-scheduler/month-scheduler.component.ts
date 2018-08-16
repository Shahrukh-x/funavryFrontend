import { Component, OnInit , Input} from '@angular/core';
import * as moment from 'moment';
import {Appointments} from '../appointments';
import {forEach} from '@angular/router/src/utils/collection';
import {$NBSP} from 'codelyzer/angular/styles/chars';
import {ScreenScedulerSharedDateServiceService} from '../screen-sceduler-shared-date-service.service';

@Component({
  selector: 'app-month-scheduler',
  templateUrl: './month-scheduler.component.html',
  styleUrls: ['./month-scheduler.component.css']
})


export class MonthSchedulerComponent implements OnInit {

  HideResources;
  TestArr;
  ClipBoard;
  FindApp;
  MonthAppointments: Array<Appointments> = [];
  Year = 2018;
  Month = 6;
  TotalDaysPortion;
  MonthName;
  speciality;
  DaysInMonth = [];
  eventsD1;
  weeks;
  TotalDays;
  MDays;
  TempIds;
  constructor(public MonthScreenShareData: ScreenScedulerSharedDateServiceService ) { }


  ngOnInit() {
    this.HideResources = true;
    this.TestArr = ['1','2','1','2'];
    this.ClipBoard = new Appointments();
    this.TempIds = 1;
    this.FindApp = false;
    this.TotalDays = 0;
    this.TotalDaysPortion = ['1', '2', '3', '4' , '5'];
    this.weeks = moment.weekdays();
    this.eventsD1 = [ '9:30-10:30' , '10:30-11:30', '12:30-1:30', '2:30-3:30'] ;
    this.speciality = ['1', '1' , '2'];
    this.MonthName = moment().month(this.Month).format('MMMM');
    this.MDays = moment(this.Year+"-"+(this.Month+1), "YYYY-MM").daysInMonth();
    this.weeks = this.createWeekDays();
    this.PopulateMonth();
  }
  //  function used to populate the month
  PopulateMonth() {
    this.weeks = this.createWeekDays();
    this.DaysInMonth=[];
    // moment = moment().month();
    for (let i = 1; i <= this.MDays; i++) {
      this.DaysInMonth[i-1] =  moment(this.Year+"-"+(this.Month+1), "YYYY-MM").date(i).format('DD');
    }
  }
  ChangeMonth() {
    this.TotalDays = 0;
    if(this.Month==11){
      this.Month=0;
      this.Year = this.Year+1;
    }
    else{
      this.Month = this.Month + 1;
    }
    this.MonthName = moment().month(this.Month).format('MMMM');
    this.weeks = moment.weekdays();
    this.MDays = moment(this.Year+"-"+(this.Month+1), "YYYY-MM").daysInMonth();
    console.log('week'+this.weeks);
    this.PopulateMonth();
  }
  getMonthOffset(){
    return moment(this.Year+"-"+(this.Month+1), "YYYY-MM").startOf('month').day();
  }
  ChangeYear () {
    this.Year = this.Year + 1;
    this.MDays = moment(this.Year+"-"+(this.Month+1), "YYYY-MM").daysInMonth();
    this.PopulateMonth();
  }
  incrementDay() {
    this.TotalDays = this.TotalDays + 1;
  }
  returnItem(Doctor , Date, Clinic) {
    this.FindApp = false;

    for ( let i =  0 ; i < this.MonthAppointments.length ; i++){
      if (this.MonthAppointments[i].DoctorName === Doctor &&
        this.MonthAppointments[i].ClinicName === Clinic &&
        this.MonthAppointments[i].Date === Date ){
        this.FindApp = true;
        return this.MonthAppointments[i];
      }
    }

    if (!this.FindApp){
      return '.';
    }
  }
  RefreshDaysCounter() {
    this.TotalDays = 0;
  }

  DeleteXResource( ClinicName) {
      for ( let i = 0; i < this.MonthScreenShareData.ClinicsList.length ; i++) {
        if ( this.MonthScreenShareData.ClinicsList[i] === ClinicName.target.innerText) {
          this.MonthScreenShareData.ClinicsList.splice(i , 1);
        }
      }
  }

  DeleteYResource( DoctorName) {
    for ( let i = 0; i < this.MonthScreenShareData.DoctorsList.length ; i++) {
      if ( this.MonthScreenShareData.DoctorsList[i] === DoctorName.target.innerText ) {
        this.MonthScreenShareData.DoctorsList.splice(i , 1);
      }
    }
  }

  createWeekDays(){
    if(this.getMonthOffset()==0){
      return moment.weekdays();
    }
    else if(this.getMonthOffset()==1){
      return ['Mon', 'Tues','Wed','Thur','Fri','Sat','Sun'];
    }
    else if(this.getMonthOffset()==2){
      return ['Tue','Wed','Thur','Fri','Sat','Sun','Mon'];
    }
    else if(this.getMonthOffset()==3){
      return ['Wed','Thur','Fri','Sat','Sun','Mon', 'Tue'];
    }
    else if(this.getMonthOffset()==4){
      return ['Thur','Friday','Sat','Sun','Mon', 'Tue','Wed'];
    }
    else if(this.getMonthOffset()==5){
      return ['Fri','Sat','Sun','Mon', 'Tues','Wed','Thur'];
    }
    else if(this.getMonthOffset()==6){
      return ['Sat','Sun', 'Mon', 'Tue','Wed','Thur','Fri'];
    }

  }
  EventBoxClicked(Event , Doctor, Clinic , Date){
      alert('Doctor: '+ Doctor + '\n Clinic: ' + Clinic + '\n Timing:' + Event.target.innerText + '\n'
      + Event.target.innerText + '\n' +
        Event.target.innerText + '\n' +
        Event.target.innerText + '\n');
  }

  EmptyBoxClicked( Doctor, Clinic , Date){
    this.MakeAppointments(Doctor , Clinic , Date);
  }

  CopyElement(Appid){
    for ( let i =  0 ; i < this.MonthAppointments.length ; i++){
      if (this.MonthAppointments[i].AppId === Appid  ){
        this.ClipBoard.AppId = Appid;
        this.ClipBoard.DoctorName = this.MonthAppointments[i].DoctorName;
        this.ClipBoard.ClinicName = this.MonthAppointments[i].ClinicName;
        this.ClipBoard.Date = this.MonthAppointments[i].Date;
        this.ClipBoard.Timing = this.MonthAppointments[i].Timing;
      }
    }
  }

  DeleteElement(Doc , Date , Clinic){
    for ( let i =  0 ; i < this.MonthAppointments.length ; i++){
      if (this.MonthAppointments[i].DoctorName === Doc &&
        this.MonthAppointments[i].ClinicName === Clinic &&
        this.MonthAppointments[i].Date === Date ){
         this.MonthAppointments.splice(i,1);
      }
    }

  }

  PasteElement(Doc , Date , Clinic){
    this.MonthAppointments.push({AppId: this.ClipBoard.AppId , DoctorName: Doc, ClinicName:Clinic, Date:Date, Timing: this.ClipBoard.Timing});
  }

  onItemDrop(e, Doc, Date , Clinic) {
    // Get the dropped data here

    // for ( let i =  0 ; i < this.MonthAppointments.length ; i++){
    //   console.log(e.dragData + ' ' + this.MonthAppointments[i].AppId);
    //   if (this.MonthAppointments[i].AppId == e.dragData ){
    //     console.log('Dropped');
        this.MonthAppointments.push({AppId: e.dragData , DoctorName: Doc, ClinicName:Clinic, Date:Date, Timing: "9:" + e.dragData + " - 10:" + e.dragData});
    //   }
    // }


  }

  MakeAppointments(Doctor , Clinic, Date){
    this.MonthAppointments.push({AppId: this.TempIds , DoctorName: Doctor, ClinicName:Clinic, Date:Date, Timing: "9:" + this.TempIds + " - 10:" + this.TempIds});
    this.TempIds = this.TempIds + 1;
  }


  ShowAndHideResources(){

    if (this.HideResources === true){
      this.HideResources = false;
    }
    else if (this.HideResources === false){
      this.HideResources = true;
    }
  }


}
