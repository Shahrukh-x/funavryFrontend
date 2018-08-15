import { Directive, HostListener, ViewChild } from '@angular/core';
import {Renderer2} from '@angular/core';
import {ElementRef} from '@angular/core';

@Directive({
  selector: '[appResizableDiv]'
})
export class ResizableDivDirective {
  unitHeight = 50;
  @ViewChild('childEvent') thisEvent: ElementRef;
  constructor(private el: ElementRef, private rederer: Renderer2) {
  }

  @HostListener('mousedown')
  onMouseDown(event) {
    this.rederer.setStyle(this.el.nativeElement, 'background-color', 'rgb(120, 120, 214)');
  }
  @HostListener('mouseleave')
  onMouseLeave(event) {
    this.rederer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }
  @HostListener('mouseup')
  onMouseUp(event) {
    this.rederer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }

  @HostListener('resizeEnd', ['$event'])
  onResizeEnd(event) {
    const styles = getComputedStyle(this.el.nativeElement); // getting its styles
    let change: number|boolean = event.edges.bottom;
    const increased = (change > 0);
    const stringHeight = styles.height.substring(0, styles.height.length - 2); // getting it's height, in string form
    let intHeight = +stringHeight; // converting to integer
    if (change < 0) {
      if (intHeight <= 50) {
        console.log('Event at minimum unit length already.');
        return;
      }
      change = +change * -1;
    }
    if (change < 25) {
      return;
    }
    let numChange: number = Number(change);
    if (increased) {
      while (numChange > 25) {
        intHeight += this.unitHeight; // increasing height
        numChange -= 50;
      }
    } else {
      while (numChange > 25) {
        intHeight -= this.unitHeight; // increasing height
        numChange -= 50;
      }
    }
    this.rederer.setStyle(this.el.nativeElement.children[0], 'height', String(intHeight) + 'px');
  }
}
