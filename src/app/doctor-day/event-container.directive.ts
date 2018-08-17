import { Directive, HostListener } from '@angular/core';
import {Renderer2} from '@angular/core';
import {ElementRef} from '@angular/core';

@Directive({
  selector: '[appEventContainer]'
})
export class EventContainerDirective {

  constructor(private el: ElementRef, private rederer: Renderer2) { }
  @HostListener('ondrop', ['$event'])
  onDrop(event) {
    // this.rederer.setStyle(this.el.nativeElement, 'background-color', 'rgb(120, 120, 214)');
    this.rederer.appendChild(this.el, event.currentTarget);
  }
  // @HostListener('click')
  // onClick(event) {
  //   // if(el.nativeElement)
  //   console.log(this.el.nativeElement);
  //   // this.rederer.setStyle(this.el.nativeElement, 'background-color', 'rgb(120, 120, 214)');
  //   // this.rederer.appendChild(this.el, event.currentTarget);
  // }
}
