import { Component, OnInit } from '@angular/core';
import {AjaxRequestServiceService} from '../ajax-request-service.service';
import {IMyDateModel, IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {



  SelectItem = false;

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    inline: true,
  };

  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor( ) { }

  ngOnInit() {

  }

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    // this.ShareDateScheduler.Month = event.date.month;
    // this.ShareDateScheduler.Year = event.date.year;
  }


}
