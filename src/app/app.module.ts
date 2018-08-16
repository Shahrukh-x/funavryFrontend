import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MonthSchedulerComponent } from './month-scheduler/month-scheduler.component';
import {RouterModule} from '@angular/router';
import { DaySchedulerComponent} from './day-scheduler/day-scheduler.component';
import { WeekScehdulerComponent } from './week-scehduler/week-scehduler.component';
import { DoctorMonthComponent } from './doctor-month/doctor-month.component';
import { DoctorWeekComponent } from './doctor-week/doctor-week.component';
import { DoctorDayComponent } from './doctor-day/doctor-day.component';
import {ContextMenuModule} from 'ngx-contextmenu';
import {DialogModule} from 'primeng/dialog';
import { NgDragDropModule } from 'ng-drag-drop';
import { DoctorSpecialDayComponent } from './doctor-special-day/doctor-special-day.component';
import { ResizableModule } from 'angular-resizable-element';
import * as $ from 'jquery';
import { Screen1Component } from './screen1/screen1.component';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import {CheckboxModule} from 'primeng/checkbox';
import { HttpClientModule} from '@angular/common/http';
import { ConflictFormComponent } from './conflict-form/conflict-form.component';
import { ResizableDivDirective } from './doctor-day/resizable-div.directive';
import { EventContainerDirective } from './doctor-day/event-container.directive';
@NgModule({
  declarations: [
    AppComponent,
    MonthSchedulerComponent,
    DaySchedulerComponent,
    WeekScehdulerComponent,
    DoctorMonthComponent,
    DoctorWeekComponent,
    DoctorDayComponent,
    DoctorSpecialDayComponent,
    Screen1Component,
    ConflictFormComponent,
    ResizableDivDirective,
    EventContainerDirective,
  ],
  imports: [
    HttpClientModule,
    CheckboxModule,
    MyDatePickerModule,
    FormsModule,
    BrowserModule,
    DialogModule,
    ResizableModule,
    ContextMenuModule.forRoot(),
    NgDragDropModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'screen1',
        component: Screen1Component
      },
      {
        path: 'MonthScehduler',
        component: MonthSchedulerComponent
      },
      {
        path: 'DaySceduler',
        component: DaySchedulerComponent
      },
      {
        path: 'WeekScehduler',
        component: WeekScehdulerComponent
      },
      {
        path: 'DoctorMonth',
        component: DoctorMonthComponent
      },
      {
        path: 'DoctorWeek',
        component: DoctorWeekComponent
      },
      {
        path: 'DoctorDay',
        component: DoctorDayComponent
      },
      {
        path: 'DoctorSpecialDay',
        component: DoctorSpecialDayComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
