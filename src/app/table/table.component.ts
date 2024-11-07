import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, QueryList, TemplateRef } from "@angular/core";
import { USERS_MOCK } from "../core/mock/users.mock";
import { CommonModule } from "@angular/common";
import { TemplateNameDirective } from "../core/directives/template.directive";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppTableComponent implements AfterViewInit {
  @ContentChildren(TemplateNameDirective) templates!: QueryList<TemplateNameDirective>;

  public data = USERS_MOCK;
  public namedTemplates: { [key: string]: TemplateRef<any> } = {};

  public get templateNames(): string[] {
    return Object.keys(this.namedTemplates);
  }

  constructor(
    private readonly _cdr: ChangeDetectorRef,
  ){}

  public ngAfterViewInit(): void {
    this.templates.forEach(templateDirective => {
      this.namedTemplates[templateDirective.name] = templateDirective.template;
    });
    this._cdr.detectChanges()
  }

  public getTemplate(name: string): TemplateRef<any> | null {
    return this.namedTemplates[name] || null;
  }
}
