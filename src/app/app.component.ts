import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppTableComponent } from './table/table.component';
import { AppDateComponent } from './cells/date/date.component';
import { AppLocationComponent } from './cells/location/location.component';
import { AppMainInfoComponent } from './cells/main-info/main-info.component';
import { TemplateNameDirective } from './core/directives/template.directive';
import { AppCellsType } from './core/enums/app.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AppTableComponent,
    AppDateComponent,
    AppLocationComponent,
    AppMainInfoComponent,
    TemplateNameDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public cellType = AppCellsType;
}
