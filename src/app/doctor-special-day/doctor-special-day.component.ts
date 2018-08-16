import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-doctor-special-day',
  templateUrl: './doctor-special-day.component.html',
  styleUrls: ['./doctor-special-day.component.css']
})
export class DoctorSpecialDayComponent implements OnInit {


  CurrentIndex;
  TodayDate;
  DoctorBox;
  DocName;
  currentDoctor;
  AllDoctors;
  FullHours;
  totalHours;
  unitsPerHour = 4;
  startTime;
  constructor() { }

  ngOnInit() {
    this.CurrentIndex = 0;
    this.currentDoctor = [];
    this.AllDoctors = ['Dr shahrukh' , 'Dr Howdy' , 'Dr ChicoChina' , 'Dr Shirza Firtas'];
    this.DoctorBox = 'Select Doctor';
    this.TodayDate = moment().format('YYYY-MMMM-DD');
    this.FullHours = [];
    this.totalHours = 10;
  }

  UpdateDoctor(Doc) {
    this.DocName = Doc;
    this.DoctorBox = Doc;
    if (this.currentDoctor.lenght === 0) {
      this.currentDoctor.push(Doc);
    } else {
      this.currentDoctor.splice(0, 1);
      this.currentDoctor.push(Doc);
    }
    this.CurrentIndex = 0;
  }

  returnItem() {
      this.CurrentIndex = this.CurrentIndex + 1;
      return this.FullHours[this.CurrentIndex];
  }

  alertFun() {
    alert('called');
    this.CurrentIndex = 0;
  }

  counter(length) {
    return new Array(length);
  }

  changefunc(event) {
    if (event.currentTarget.checked) {
      alert('checked');
    } else {
      alert('unchecked');
    }
  }
}
