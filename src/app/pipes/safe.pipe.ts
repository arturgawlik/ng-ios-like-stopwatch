import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafePipe {
  constructor(private sanitizer: DomSanitizer){}

  transform(html: string| undefined): SafeHtml | null {
    if (html) {
      return this.sanitizer.bypassSecurityTrustHtml(html as string);
    }
    return null;
  }
}
