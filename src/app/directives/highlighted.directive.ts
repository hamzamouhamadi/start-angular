import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('appHighlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() {
    console.log('Directive created ...');

  }
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    console.log($event);

    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted)
  }

  @HostListener('mouseout')
  mouseOut() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted)
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted)
  }
}
