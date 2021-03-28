import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-svg',
  template: `
    <div [class]="containerClass" [innerHTML]="svgContent | safeHtml" #svgContainer></div>
  `
})
export class SvgComponent implements OnInit{
  @Input() svgPath = '';
  @Input() containerClass = '';
  svgClassInternal: string | undefined;
  @Input() set svgClass(svgClasses: string) {
    this.svgClassInternal = svgClasses;
    this.setSVGClasses();
  }
  @ViewChild('svgContainer') svgContainer: ElementRef<HTMLDivElement> | undefined;
  svgContent: string | undefined;
  @HostListener('DOMSubtreeModified') onDOMSubtreeModified(): void {
    this.setSVGClasses();
  }

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    if (this.svgPath) {
      this.httpClient.get(this.svgPath, { responseType: 'text' }).subscribe(svgContentResponse => this.svgContent = svgContentResponse);
    }
  }
  private setSVGClasses(): void {
    if (this.svgContainer as ElementRef) {
      const svgElem = this.svgContainer?.nativeElement.querySelector<SVGElement>('svg');
      if (svgElem) {
        svgElem.className.baseVal = '';
        if (this.svgClassInternal) {
          this.svgClassInternal.split(' ').forEach(svgClass => {
            svgElem.classList.add(svgClass);
          });
        }
      }
    }
  }
}
