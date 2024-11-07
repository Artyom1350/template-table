import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[templateName]',
  standalone: true
})
export class TemplateNameDirective {
  @Input('templateName') name!: string;

  constructor(public template: TemplateRef<any>) {}
}
