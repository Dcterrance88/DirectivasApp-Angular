import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf (condicion: boolean){
    if(condicion){
      this._vc.createEmbeddedView(this._tr);
    }else {
      this._vc.clear();
    }
  }

  constructor(private _tr: TemplateRef<HTMLElement>,
              private _vc: ViewContainerRef) {}

}
