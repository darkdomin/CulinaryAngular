import { AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[rlAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
      this.el.nativeElement.focus();
  }

}
