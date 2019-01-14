import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private readonly domSanitizer: DomSanitizer) {

  }
  transform(value: string, args?: any): any {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }

}
